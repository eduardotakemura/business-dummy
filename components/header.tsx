import Link from 'next/link'
import { MainIcon } from './shared/main-icon'
import { APP_NAME, APP_THEME } from '@/lib/constants'

export function Header() {
  return (
    <header className={`w-full bg-${APP_THEME.secondary} px-6 py-4`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <MainIcon />
          <span className={`text-xl font-bold text-${APP_THEME.onSecondary}`}>
            {APP_NAME}
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/sobre"
            className={`text-${APP_THEME.onSecondaryFade} hover:text-${APP_THEME.onSecondary} transition-colors`}
          >
            Sobre
          </Link>
          <Link
            href="/planos"
            className={`text-${APP_THEME.onSecondaryFade} hover:text-${APP_THEME.onSecondary} transition-colors`}
          >
            Planos
          </Link>
          <Link
            href="/categorias"
            className={`text-${APP_THEME.onSecondaryFade} hover:text-${APP_THEME.onSecondary} transition-colors`}
          >
            Categorias
          </Link>
          <Link
            href="/contato"
            className={`px-4 py-2 rounded-full border border-${APP_THEME.primary} bg-${APP_THEME.primaryBackground} text-${APP_THEME.primary} hover:bg-${APP_THEME.primaryHover} transition-colors`}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
