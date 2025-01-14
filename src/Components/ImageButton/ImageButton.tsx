import { Link } from 'react-router-dom'
import styles from './ImageButton.module.scss'

type IImageButtonProps = {
  title: string | JSX.Element
  subtitle?: string
  image: string
  to: string
}

export const ImageButton = ({ title, subtitle, image, to }: IImageButtonProps) => {
  return (
    <Link to={to} role="button" className={styles.imageButton}>
      <div className={styles.imageArea}>
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className={styles.title}>
        {title}
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </Link>
  )
}
