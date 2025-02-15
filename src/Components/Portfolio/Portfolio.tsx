import { Link } from 'react-router-dom'
import styles from './Portfolio.module.scss'

type PortfolioCardLinkProps = {
  title: string
  linkTitle: string
  linkUrl?: string
  linkPath?: string
}

export type PortfolioCardProps = PortfolioCardLinkProps & {
  description: React.JSX.Element | string
  icon?: React.JSX.Element
  backgroundImage?: string
}

const PortfolioCardLink = ({ title, linkTitle, linkUrl, linkPath }: PortfolioCardLinkProps) => {
  if (linkUrl) {
    return (
      <a href={linkUrl} title={`Open ${title} in new tab`} target="_blank" role="button" rel="noreferrer">
        {linkTitle}
      </a>
    )
  } else if (linkPath) {
    return (
      <Link to={linkPath} title={`Go to ${title} page`} role="button">
        {linkTitle}
      </Link>
    )
  } else {
    return <></>
  }
}

const PortfolioCard = ({
  title,
  description,
  linkTitle,
  linkUrl,
  linkPath,
  icon,
  backgroundImage,
}: PortfolioCardProps) => {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.layout}>
        {(backgroundImage || icon) && (
          <div className={styles.thumbnail} style={{ backgroundImage: `url(${backgroundImage})` }}>
            {icon ? <div className={styles.icon}>{icon}</div> : <></>}
          </div>
        )}
        <div className={styles.info}>
          <div className={styles.description}>{description}</div>
          <div>
            <PortfolioCardLink title={title} linkTitle={linkTitle} linkUrl={linkUrl} linkPath={linkPath} />
          </div>
        </div>
      </div>
    </article>
  )
}

export const Portfolio = ({ items }: { items: PortfolioCardProps[] }) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <PortfolioCard {...item} key={item.title} />
      ))}
    </div>
  )
}
