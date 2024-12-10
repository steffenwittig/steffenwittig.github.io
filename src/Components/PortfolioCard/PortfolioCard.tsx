import { Link } from 'react-router-dom'
import styles from './PortfolioCard.module.scss'
import { Icon } from 'Components/Icon/Icon'

type PortfolioCardLinkProps = {
  title: string
  linkTitle: string
  linkUrl?: string
  linkPath?: string
}

export type PortfolioCardProps = PortfolioCardLinkProps & {
  description: JSX.Element | string
  icon?: JSX.Element
  backgroundImage?: string
}

const PortfolioCardIcon = ({ icon }: { icon: JSX.Element | undefined }) => {
  return icon ? <Icon icon={icon} color="primary-inverse" /> : <div className={styles.spacer}></div>
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

export const PortfolioCard = ({
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
      <div className={styles.flex}>
        <div className={styles.preview} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <PortfolioCardIcon icon={icon} />
        </div>
        <div>
          <p>{description}</p>
          <PortfolioCardLink title={title} linkTitle={linkTitle} linkUrl={linkUrl} linkPath={linkPath} />
        </div>
      </div>
    </article>
  )
}
