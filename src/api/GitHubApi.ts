import * as https from 'https'
import { API } from './index'

const { GITHUB_TOKEN } = process.env

const owner = '6starlong'
const repo = '6starlong.github.io'
const branch = 'vitesse'
const apiRoot = `https://api.github.com/repos/${owner}/${repo}`

const author = {
  name: 'Starlong',
  email: 'starlong.lu@gmail.com',
}

const api = new API({
  baseURL: apiRoot,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
})

// GITHUB REST API https://docs.github.com/cn/rest
export default {
  getContent: (path: string) =>
    api.get(`/contents/${path}`),

  createBlob: (content: string, encoding: string) =>
    api.post('/git/blobs', { content, encoding }),

  getBranch: () =>
    api.get(`/branches/${branch}`),

  createTree: (base_tree: string, path: string, sha: string) =>
    api.post('/git/trees',
      { base_tree, tree: [{ path, mode: '100644', type: 'blob', sha }] },
    ),

  createCommits: (base_tree: string, slug: string, tree: string, type: string) =>
    api.post('/git/commits', {
      author: { ...author, date: new Date() },
      message: type === 'publish'
        ? `feat(cms): create ${slug}`
        : `chore(cms): update ${slug}`,
      parents: [base_tree],
      tree,
    }),

  getRefs: (ref: string) =>
    api.get(`/git/refs/heads/${ref}`),

  createRefs: (ref: string, sha: string) =>
    api.post('/git/refs', { ref: `refs/heads/${ref}`, sha }),

  updateRefs: (ref: string, sha: string) =>
    api.post(`/git/refs/heads/${ref}`, { sha, force: true }),

  getPulls: () =>
    api.get('/pulls', { base: branch, state: 'open' }),

  createPulls: (label: string, slug: string, type: string) =>
    api.post('/pulls', {
      base: branch,
      body: '由语雀同步至 Netlify CMS 自动生成',
      head: label,
      title: type === 'publish'
        ? `feat(cms): create ${slug}`
        : `chore(cms): update ${slug}`,
    }),

  addLabels: (number: number) =>
    api.post(`/issues/${number}/labels`,
      { labels: ['netlify-cms/pending_review'] },
    ),
}

