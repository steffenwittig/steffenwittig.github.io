import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const headerLinks = [{}]

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <ul>
          <li>Steffen Wittig's Portfolio</li>
        </ul>
        <ul>
          <li>
            <Link to="/art">Art</Link>
          </li>
          <li>
            <Link to="/tech">Tech</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
