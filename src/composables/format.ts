export function formatDate(d: string | Date) {
  return useDateFormat(d, 'YYYY-MM-DD', { locales: 'zh-CN' }).value
}

export function formatTimeAgo(d: string | Date) {
  return useTimeAgo(d).value
}

