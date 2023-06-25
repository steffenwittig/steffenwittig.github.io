import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Steffen Wittig</p>
      <p>
        <Link to="/impress">Impress</Link>,{' '}
        <Link to="/data-privacy">Data Privacy</Link>,{' '}
        <Link to="mailto:info@steffenwittig.com">Contact</Link>
      </p>
    </footer>
  )
}
