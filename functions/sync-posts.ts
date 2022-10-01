import type { Handler } from '@netlify/functions'
import { Base64 } from 'js-base64'
import api from './GitHubAPI'

export const handler: Handler = async (event: any) => {
  // 只接收 POST 请求
  if (event.httpMethod !== 'POST')
    return { statusCode: 405 }

  // 获取帖子数据
  const { data } = JSON.parse(event.body)
  // 替换 markdown 格式
  const content = `---\nslug: ${data.slug}\ntitle: ${data.title}\ndate: ${data.created_at}\n---\n\n[[toc]]\n\n${data.body}`
  // 同步至仓库，将内容视为二进制并转换为 blob
  syncToRepo(data, Base64.encode(content))

  return { statusCode: 200 }
}

async function syncToRepo(postData: any, content: any) {
  const { slug } = postData
  const reference = `cms/posts/${slug}`

  try {
    // 创建 blob
    const blob = await api.createBlob(content, 'base64')
    // 获取分支
    const branch = await api.getBranch()
    // 创建 trees
    const trees = await api.createTree(branch.commit.sha, `pages/posts/${slug}.md`, blob.sha)
    // 创建提交
    const commits = await api.createCommits(branch.commit.sha, `posts/${slug}.md`, trees.sha)
    // 获取 reference
    const refs = await api.getRefs(reference).catch(() => undefined)
    // 判断 reference 是否存在，创建或更新 reference
    if (refs)
      await api.updateRefs(reference, commits.sha)
    else
      await api.createRefs(reference, commits.sha)
    // 列出拉取请求
    const pullRequese = await api.getPulls()
    if (!pullRequese.some((i: any) => i.head.ref === `${reference}`)) {
      // 创建拉取请求
      const pull = await api.createPulls(`6starlong:${reference}`, `posts/${slug}.md`)
      // 添加标签
      await api.addLabels(pull.number)
    }
  }
  catch (error: any) {
    console.error(error.response)
  }
}
