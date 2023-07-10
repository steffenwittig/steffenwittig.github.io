import styles from './PortfolioCard.module.scss'

export interface PortfolioCardProps {
  title: string
  description: JSX.Element | string
  linkTitle: string
  linkUrl: string
  icon: JSX.Element
  backgroundImage?: string
}

export const PortfolioCard = ({
  title,
  description,
  linkTitle,
  linkUrl,
  icon,
  backgroundImage,
}: PortfolioCardProps) => {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.flex}>
        <div className={styles.preview} style={{ backgroundImage: `url(${backgroundImage})` }}>
          {icon}
        </div>
        <div>
          <p>{description}</p>
          <a href={linkUrl} title={`Open ${title} in new tab`} target="_blank" role="button" rel="noreferrer">
            {linkTitle}
          </a>
        </div>
      </div>
    </article>
  )
}
