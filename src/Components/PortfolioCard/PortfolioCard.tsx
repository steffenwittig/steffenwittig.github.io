import { Link } from 'react-router-dom'
import styles from './PortfolioCard.module.scss'
import { Icon } from 'Components/Icon/Icon'

export type IPortfolioCardProps = {
  title: string
  description: JSX.Element | string
  linkTitle: string
  linkUrl?: string
  linkPath?: string
  icon?: JSX.Element
  backgroundImage?: string
}

export const PortfolioCard = ({
  title,
  description,
  linkTitle,
  linkUrl,
  linkPath,
  icon,
  backgroundImage,
}: IPortfolioCardProps) => {
  function renderIcon() {
    if (icon) {
      return <Icon icon={icon} color="primary-inverse" />
    } else {
      return <div className={styles.spacer}></div>
    }
  }

  function renderLink() {
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
    }
  }

  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.flex}>
        <div className={styles.preview} style={{ backgroundImage: `url(${backgroundImage})` }}>
          {renderIcon()}
        </div>
        <div>
          <p>{description}</p>
          {renderLink()}
        </div>
      </div>
    </article>
  )
}
