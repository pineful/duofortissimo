import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { LOCALES, detectLocale, getContent, localeFromQuery, rememberLocale } from './content/index.js'

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [code, setCodeState] = useState(() => localeFromQuery() || detectLocale())

  const setCode = useCallback((next) => {
    if (!getContent(next)) return
    setCodeState(next)
    rememberLocale(next)
  }, [])

  const c = useMemo(() => getContent(code), [code])

  useEffect(() => {
    const html = document.documentElement
    html.lang = c.htmlLang
    html.setAttribute('data-lang', c.code)
    document.title = c.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', c.meta.description)
  }, [c])

  const value = useMemo(() => ({ code, c, setCode, locales: LOCALES }), [code, c, setCode])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
