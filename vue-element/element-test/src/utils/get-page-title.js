import defaultSettings from '@/settings'

const title = defaultSettings.title || 'madongdong'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
