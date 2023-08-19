import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

interface IHeaderLink {
  to: string
  title: string
}

const headerLinks: IHeaderLink[] = [
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
    <div className={styles.header}>
      <nav className="container">
        <ul>
          <li>Steffen Wittig's Portfolio</li>
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
    </div>
  )
}
