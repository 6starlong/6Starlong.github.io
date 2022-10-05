/* eslint-disable no-console */
import type { Handler } from '@netlify/functions'
import { Base64 } from 'js-base64'
import matter from 'gray-matter'
import api from '~/api/GitHubApi'

interface Matter {
  slug: string
  title: string
  date: string
}

export const handler: Handler = async (event: any) => {
  // 只接收 POST 请求
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: '错误的请求' }

  // 获取帖子数据
  const { slug, title, created_at, body, webhook_subject_type } = JSON.parse(event.body).data
  const reference = `cms/posts/${slug}`

  let metaData: Matter = { slug, title, date: created_at }

  // 添加到 Github 数据库，创建拉取请求，同步至 Netlify CMS
  try {
    console.info('🤺🤺🤺')

    // 获取 Content
    const { content } = await api.getContent(`pages/posts/${slug}.md`).catch(() => undefined)
    if (content) {
      const { data } = matter(Base64.decode(content))
      metaData = Object.assign(data, { slug, title, date: new Date(data.date || created_at).toISOString() })
    }

    // 替换 markdown 格式
    const frontmatter = Object.keys(metaData).map(key => `${key}: ${metaData[key as keyof Matter]}`).join('\n')
    const markdown = `---\n${frontmatter}\n---\n\n[[toc]]\n\n${body}`

    // 创建 Git blob
    const blob = await api.createBlob(Base64.encode(markdown), 'base64')
    // 获取分支
    const branch = await api.getBranch()
    // 创建 trees
    const trees = await api.createTree(branch.commit.sha, `pages/posts/${slug}.md`, blob.sha)
    // 创建提交
    const commits = await api.createCommits(branch.commit.sha, `${slug}.md`, trees.sha, webhook_subject_type)

    // 判断 reference 是否存在，创建或更新 reference
    const refs = await api.getRefs(reference).catch(() => undefined)
    if (refs)
      await api.updateRefs(reference, commits.sha)
    else
      await api.createRefs(reference, commits.sha)

    // 创建 Pull request
    const pullRequest = await api.getPulls()
    if (!pullRequest.some((i: any) => i.head.ref === `${reference}`)) {
      // 创建拉取请求
      const pull = await api.createPulls(`6starlong:${reference}`, `${slug}.md`, webhook_subject_type)
      // 添加 labels 到拉取请求
      await api.addLabels(pull.number)
    }

    console.info('🎉🎉🎉')
  }
  catch (error) {
    console.error(error)
  }

  return { statusCode: 200, body: '请求成功' }
}
