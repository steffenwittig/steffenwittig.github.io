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

export const Header = () => {
  return (
    <nav className={styles.nav} role="navigation" aria-label="Main">
      <ul className={styles.navBrand}>
        <li>
          <h1>
            <Link to="/">Steffen Wittig's Portfolio</Link>
          </h1>
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
    </nav>
  )
}
