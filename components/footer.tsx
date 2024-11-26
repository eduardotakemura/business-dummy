import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export function Footer() {
  return (
    <footer className={`w-full bg-theme-secondary px-6 py-4`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className={`text-theme-onSecondaryFade`}>
          © {new Date().getFullYear()} {APP_NAME}, Inc. Todos os direitos
          reservados.
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            className={`text-theme-onSecondaryFade hover:text-theme-onSecondary transition-colors`}
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className={`text-theme-onSecondaryFade hover:text-theme-onSecondary transition-colors`}
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className={`text-theme-onSecondaryFade hover:text-theme-onSecondary transition-colors`}
          >
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
