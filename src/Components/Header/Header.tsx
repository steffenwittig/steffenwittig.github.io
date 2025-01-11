import { Cool, Happy } from '@styled-icons/boxicons-regular'
import { ReactComponent as ArtLogo } from 'Assets/logo_notsteffenwittig.svg'
import { Button } from 'Components/Button/Button'
import { useArtmode } from 'Hooks/useArtmode'
import { Theme, useTheme } from 'Hooks/useTheme'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

type HeaderLink = {
  to: string
  title: string
}

const headerLinks: HeaderLink[] = [
  {
    to: '/art',
    title: 'Art',
  },
  {
    to: '/tech',
    title: 'Tech',
  },
]

const BrandElement = () => {
  const isArtMode = useArtmode()

  return (
    <Link to="/">
      <h1>
        <span style={{ display: isArtMode ? 'none' : '' }} aria-hidden={isArtMode}>
          Steffen Wittig
        </span>
        <ArtLogo style={{ display: isArtMode ? '' : 'none' }} title="NotSteffenWittig" aria-hidden={!isArtMode} />
        <span>'s Portfolio</span>
      </h1>
    </Link>
  )
}

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme()

  return (
    <div className={styles.toggle}>
      <Button
        variant="link"
        title="Switch Theme"
        onClick={() => setTheme(theme === Theme.dark ? Theme.light : Theme.dark)}
      >
        {theme === Theme.dark ? <Cool /> : <Happy />}
      </Button>
    </div>
  )
}

export const Header = () => {
  return (
    <div className={styles.outer}>
      <nav className={styles.nav} role="navigation" aria-label="Main">
        <ul className={styles.navBrand}>
          <li>
            <BrandElement />
          </li>
        </ul>
        <ul>
          {headerLinks.map((l) => (
            <li key={l.title}>
              <Link to={l.to} title={`Go to ${l.title} page`}>
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
      </nav>
      <ThemeToggle />
    </div>
  )
}
