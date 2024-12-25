import styles from './Page.module.scss'

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>{children}</div>
    </div>
  )
}
