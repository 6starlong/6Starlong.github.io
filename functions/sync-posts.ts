import type { Handler } from '@netlify/functions'
import { Base64 } from 'js-base64'
import api from './GitHubAPI'

export const handler: Handler = async (event: any) => {
  // 只接收 POST 请求
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: '错误的请求' }

  // 获取帖子数据
  const { title, slug, body, created_at, webhook_subject_type } = JSON.parse(event.body).data
  // 替换 markdown 格式
  const content = `---\nslug: ${slug}\ntitle: ${title}\ndate: ${created_at}\n---\n\n[[toc]]\n\n${body}`
  // 同步至 Github 储存库
  try {
    const reference = `cms/posts/${slug}`
    // eslint-disable-next-line no-console
    console.info('🤺🤺🤺')
    // 创建 blob
    const blob = await api.createBlob(Base64.encode(content), 'base64')
    // 获取分支
    const branch = await api.getBranch()
    // 创建 trees
    const trees = await api.createTree(branch.commit.sha, `pages/posts/${slug}.md`, blob.sha)
    // 创建提交
    const commits = await api.createCommits(branch.commit.sha, `${slug}.md`, trees.sha, webhook_subject_type)
    // 获取 reference
    const refs = await api.getRefs(reference).catch(() => undefined)
    // 判断 reference 是否存在，创建或更新 reference
    if (refs)
      await api.updateRefs(reference, commits.sha)
    else
      await api.createRefs(reference, commits.sha)
    // 创建 Pull request
    const pullRequest = await api.getPulls()
    if (!pullRequest.some((i: any) => i.head.ref === `${reference}`)) {
      // 创建拉取请求
      const pull = await api.createPulls(`6starlong:${reference}`, `${slug}.md`, webhook_subject_type)
      // 添加标签
      await api.addLabels(pull.number)
    }
    // eslint-disable-next-line no-console
    console.info('🎉🎉🎉')
  }
  catch (error: any) {
    console.error(error.response)
  }

  return { statusCode: 200, body: '请求成功' }
}
