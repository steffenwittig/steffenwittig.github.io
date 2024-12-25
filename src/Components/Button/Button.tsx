import { useNavigate } from 'react-router-dom'
import styles from './Button.module.scss'

type ButtonProps = {
  title: string
  onClick?: () => void
  border?: boolean
  to?: string
}

export const Button = ({ title, onClick, border, to }: ButtonProps) => {
  const navigate = useNavigate()

  const classes = [styles.button, border ? styles.borderPrimary : styles.primary]

  const handleClick = () => {
    if (onClick) onClick()
    if (to) navigate(to)
  }

  return (
    <button title={title} onClick={handleClick} className={classes.join(' ')} role="button">
      {title}
    </button>
  )
}
