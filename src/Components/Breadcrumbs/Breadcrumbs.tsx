import { Link, useMatches } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

type ICrumb = {
  pathname: string
  title: string
}

export const Breadcrumbs = () => {
  const matches = useMatches()
  const crumbs: ICrumb[] = matches
    // @ts-ignore the react-router useMatches solution for breadcrumbs is special...
    .filter((match) => Boolean(match.handle?.title))
    .map(
      (match): ICrumb => ({
        pathname: match.pathname,
        // @ts-ignore
        title: match.handle?.title,
      })
    )

  function renderCrumb(crumb: ICrumb, level: number, withLink: boolean) {
    if (withLink) {
      return (
        <Link to={crumb.pathname} title={crumb.title}>
          {renderSegment(crumb, level)}
        </Link>
      )
    }
    return renderSegment(crumb, level)
  }

  function renderSegment(crumb: ICrumb, level: number) {
    return <li key={level}>{crumb.title}</li>
  }

  return (
    <ol className={styles.breadcrumbs}>{crumbs.map((c: ICrumb, i) => renderCrumb(c, i, i < crumbs.length - 1))}</ol>
  )
}
