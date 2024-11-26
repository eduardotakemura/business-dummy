import Link from 'next/link'
import { MainIcon } from './shared/main-icon'
import { APP_NAME } from '@/lib/constants'

export function Header() {
  return (
    <header className={`w-full bg-theme-secondary px-6 py-4`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <MainIcon />
          <span className={`text-xl font-bold text-theme-onSecondary`}>
            {APP_NAME}
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/sobre"
            className={`text-theme-onSecondaryFade hover:text-theme-onSecondary transition-colors`}
          >
            Sobre
          </Link>
          <Link
            href="/planos"
            className={`text-theme-onSecondaryFade hover:text-theme-onSecondary transition-colors`}
          >
            Planos
          </Link>
          <Link
            href="/categorias"
            className={`text-theme-onSecondaryFade hover:text-theme-onSecondary transition-colors`}
          >
            Categorias
          </Link>
          <Link
            href="/contato"
            className={`px-4 py-2 rounded-lg bg-theme-primary text-theme-onSecondary hover:bg-theme-primaryHover transition-colors`}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
