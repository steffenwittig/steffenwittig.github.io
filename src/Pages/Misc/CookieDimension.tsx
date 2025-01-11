import { Link } from 'react-router-dom'
import styles from './CookieDimension.module.scss'

export const CookieDimension = () => {
  const cookies = Array.from({ length: 1000 }, () => (
    <div
      className={styles.cookie}
      style={{
        fontSize: Math.random() * 40 + 'px',
        marginTop: Math.random() * 5 + 'px',
        animationDuration: Math.max(1, Math.random() * 10) + 's',
      }}
    >
      🍪
    </div>
  ))

  return (
    <div className={styles.outer}>
      <div className={styles.content}>
        <h2>You have found the secret cookie dimension.</h2>
        <div className={styles.cookies}>{cookies}</div>
        <Link to="/">Get me out of here!</Link>
      </div>
    </div>
  )
}
