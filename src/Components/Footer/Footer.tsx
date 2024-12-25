import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>©2024 Steffen Wittig</div>
      <div>
        <Link to="/impress">Impress</Link>
      </div>
      <div>
        <Link to="/data-privacy">Data Privacy</Link>
      </div>
      <div>
        <Link to="mailto:info@steffenwittig.com">Contact</Link>
      </div>
    </footer>
  )
}
