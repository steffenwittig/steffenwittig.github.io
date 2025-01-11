import { Moon, Sun } from '@styled-icons/boxicons-regular'
import { Button } from 'Components/Button/Button'
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

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme()

  return (
    <div className={styles.toggle}>
      <Button
        variant="link"
        title="Switch Theme"
        onClick={() => setTheme(theme === Theme.dark ? Theme.light : Theme.dark)}
      >
        {theme === Theme.dark ? <Moon /> : <Sun />}
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
            <h1>
              <Link to="/">Steffen Wittig's Portfolio</Link>
            </h1>
          </li>
        </ul>
        <ul className={styles.entries}>
          {headerLinks.map((l) => (
            <li key={l.title}>
              <Link to={l.to} title={`Go to ${l.title} page`}>
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  )
}
