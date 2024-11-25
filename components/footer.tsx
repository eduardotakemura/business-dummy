import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { APP_NAME, APP_THEME } from '@/lib/constants'

export function Footer() {
  return (
    <footer className={`w-full bg-${APP_THEME.secondary} px-6 py-4`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className={`text-${APP_THEME.onSecondaryFade}`}>
          © {new Date().getFullYear()} {APP_NAME}, Inc. Todos os direitos
          reservados.
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            className={`text-${APP_THEME.onSecondaryFade} hover:text-${APP_THEME.onSecondary} transition-colors`}
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className={`text-${APP_THEME.onSecondaryFade} hover:text-${APP_THEME.onSecondary} transition-colors`}
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className={`text-${APP_THEME.onSecondaryFade} hover:text-${APP_THEME.onSecondary} transition-colors`}
          >
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
