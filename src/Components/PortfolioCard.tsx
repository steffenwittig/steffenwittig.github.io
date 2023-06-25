import styles from './PortfolioCard.module.scss'

export interface PortfolioCardProps {
  title: string
  description: JSX.Element | string
  linkTitle: string
  linkUrl: string
  imageUrl?: string
}

export const PortfolioCard = ({
  title,
  description,
  linkTitle,
  linkUrl,
  imageUrl,
}: PortfolioCardProps) => {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.flex}>
        {imageUrl && <img src={imageUrl} />}
        <div>
          <p>{description}</p>
          <a
            href={linkUrl}
            title={`Open ${title} in new tab`}
            target="_blank"
            role="button"
          >
            {linkTitle}
          </a>
        </div>
      </div>
    </article>
  )
}
