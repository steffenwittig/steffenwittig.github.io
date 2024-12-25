import { Link, useMatches } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

type Crumb = {
  pathname: string
  title: string
}

const Segment = ({ level, isCurrent, children }: { level: number; isCurrent: boolean; children: React.ReactNode }) => {
  return (
    <li key={level} aria-current={isCurrent ? 'page' : false}>
      {children}
    </li>
  )
}

export const Breadcrumbs = () => {
  const matches = useMatches()
  const crumbs: Crumb[] = matches
    // @ts-ignore the react-router useMatches solution for breadcrumbs is special...
    .filter((match) => Boolean(match.handle?.title))
    .map(
      (match): Crumb => ({
        pathname: match.pathname,
        // @ts-ignore
        title: match.handle?.title,
      })
    )

  function renderCrumb(crumb: Crumb, level: number, isCurrent: boolean) {
    const label = isCurrent ? (
      crumb.title
    ) : (
      <Link to={crumb.pathname} title={crumb.title}>
        {crumb.title}
      </Link>
    )

    return (
      <Segment level={level} isCurrent={isCurrent}>
        {label}
      </Segment>
    )
  }

  return (
    <div className={styles.container}>
      <nav role="tree" aria-label="Breadcrumb" className={styles.nav}>
        <ol className={styles.breadcrumbs}>
          {crumbs.map((c: Crumb, i) => renderCrumb(c, i, i === crumbs.length - 1))}
        </ol>
      </nav>
    </div>
  )
}
