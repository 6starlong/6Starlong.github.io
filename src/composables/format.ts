export function formatDate(d: string | Date) {
  const formatted = $(useDateFormat(d, 'YYYY-MM-DD', { locales: 'zh-CN' }))
  return formatted
}
