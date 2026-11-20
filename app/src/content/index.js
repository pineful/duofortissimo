import ko from './ko.js'
import en from './en.js'
import it from './it.js'
import de from './de.js'
import ja from './ja.js'
import zhCN from './zh-CN.js'
import zhTW from './zh-TW.js'
import ru from './ru.js'

// 화면에 보이는 순서. label은 언어 전환 목록에 그대로 나옵니다.
export const LOCALES = [ko, en, it, de, ja, zhCN, zhTW, ru]

const BY_CODE = Object.fromEntries(LOCALES.map((l) => [l.code, l]))

export function getContent(code) {
  return BY_CODE[code] || ko
}

const STORE_KEY = 'duo-lang'

function matchTag(tag) {
  if (!tag) return null
  const t = String(tag).toLowerCase().replace('_', '-')
  if (t === 'ko' || t.startsWith('ko-')) return 'ko'
  if (t === 'en' || t.startsWith('en-')) return 'en'
  if (t === 'it' || t.startsWith('it-')) return 'it'
  if (t === 'de' || t.startsWith('de-')) return 'de'
  if (t === 'ja' || t.startsWith('ja-')) return 'ja'
  if (t === 'ru' || t.startsWith('ru-')) return 'ru'
  if (t.startsWith('zh')) {
    // 타이완·홍콩·마카오는 번체, 그 밖의 중국어는 간체
    if (/(hant|tw|hk|mo)/.test(t)) return 'zh-TW'
    return 'zh-CN'
  }
  return null
}

// 저장된 선택 → 브라우저 언어 → 한국어 순으로 고릅니다.
export function detectLocale() {
  try {
    const saved = localStorage.getItem(STORE_KEY)
    if (saved && BY_CODE[saved]) return saved
  } catch (e) {
    /* 저장소를 쓸 수 없는 환경 */
  }
  const list = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]) || []
  for (const tag of list) {
    const hit = matchTag(tag)
    if (hit) return hit
  }
  return 'ko'
}

export function rememberLocale(code) {
  try {
    localStorage.setItem(STORE_KEY, code)
  } catch (e) {
    /* 무시 */
  }
}

// ?lang=ja 처럼 주소로도 언어를 고정할 수 있게 합니다.
export function localeFromQuery() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    return q && BY_CODE[q] ? q : null
  } catch (e) {
    return null
  }
}
