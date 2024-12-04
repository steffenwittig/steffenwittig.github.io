import { Link } from 'react-router-dom'
import styles from './ImageButton.module.scss'

type IImageButtonProps = {
  title: string
  subtitle?: string
  image: string
  icon?: React.ReactNode
  to: string
}

export const ImageButton = ({ title, subtitle, image, icon, to }: IImageButtonProps) => {
  return (
    <Link to={to} role="button" className={styles.imageButton}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
    </Link>
  )
}
