import styles from './CookieDimension.module.scss'

export const CookieDimension = () => {
  function renderCookies() {
    return Array.from({ length: 1000 }, () => (
      <div style={{ fontSize: Math.random() * 40 + 'px', marginTop: Math.random() * 40 + 'px' }}>🍪</div>
    ))
  }
  return (
    <div>
      <p>You have found the secret cookie dimension.</p>
      <div className={styles.cookies}>{renderCookies()}</div>
    </div>
  )
}
