import * as https from 'https'
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// GITHUB REST API https://docs.github.com/cn/rest
const { GITHUB_TOKEN } = process.env

class API {
  apiRoot: string
  owner: string
  repo: string
  branch: string
  service: AxiosInstance

  constructor() {
    this.apiRoot = 'https://api.github.com'
    this.owner = '6starlong'
    this.repo = '6starlong.github.io'
    this.branch = 'vitesse'

    this.service = axios.create({
      baseURL: this.apiRoot,
      timeout: 3000,
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })

    this.service.interceptors.request.use(
      (request: AxiosRequestConfig) => {
        return request
      }, (error: any) => {
        return Promise.reject(error)
      })

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      }, (error: any) => {
        return Promise.reject(error)
      })
  }

  // 一入 any 深似海，从此类型是路人
  get<T = any>(url: string, params?: object): Promise<T> {
    return this.service.get(`/repos/${this.owner}/${this.repo}${url}`, params)
  }

  // 一入 any 深似海，从此类型是路人
  post<T = any>(url: string, params?: object): Promise<T> {
    return this.service.post(`/repos/${this.owner}/${this.repo}${url}`, params)
  }

  // 创建 Git blob（二进制大型对象），写入 Git 数据库
  createBlob(content: string, encoding: string) {
    return this.post('/git/blobs', {
      content, encoding,
    })
  }

  // 获取分支
  getBranch() {
    return this.get(`/branches/${this.branch}`)
  }

  // 创建 trees (目录结构)
  createTree(base_tree: string, path: string, sha: string) {
    return this.post('/git/trees', {
      base_tree,
      tree: [{
        path,
        mode: '100644',
        type: 'blob',
        sha,
      }],
    })
  }

  // 创建提交
  createCommits(base_tree: string, slug: string, tree: string, type: string) {
    return this.post('/git/commits', {
      author: {
        name: 'Starlong',
        email: 'starlong.lu@gmail.com',
        date: new Date(),
      },
      message: type === 'publish'
        ? `feat(cms): create ${slug}`
        : `chore(cms): update ${slug}`,
      parents: [base_tree],
      tree,
    })
  }

  // 获取 reference
  getRefs(ref: string) {
    return this.get(`/git/refs/heads/${ref}`)
  }

  // 创建 reference
  createRefs(ref: string, sha: string) {
    return this.post('/git/refs', {
      ref: `refs/heads/${ref}`,
      sha,
    })
  }

  // 更新 reference
  updateRefs(ref: string, sha: string) {
    return this.post(`/git/refs/heads/${ref}`, {
      sha,
      force: true,
    })
  }

  // 列出拉取请求
  getPulls() {
    return this.get('/pulls', {
      base: this.branch,
      state: 'open',
    })
  }

  // 创建拉取请求 pulls
  createPulls(label: string, slug: string, type: string) {
    return this.post('/pulls', {
      base: this.branch,
      body: '由语雀同步至 Netlify CMS 自动生成',
      head: label,
      title: type === 'publish'
        ? `feat(cms): create ${slug}`
        : `chore(cms): update ${slug}`,
    })
  }

  // 添加 labels 到拉取请求
  addLabels(number: number) {
    return this.post(`/issues/${number}/labels`, {
      labels: ['netlify-cms/pending_review'],
    })
  }
}

export default new API()

