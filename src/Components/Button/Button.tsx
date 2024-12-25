import { useNavigate } from 'react-router-dom'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = {
  title: string
  onClick?: () => void
  variant?: ButtonVariant
  border?: boolean
  to?: string
}

export const Button = ({ title, onClick, variant, border, to }: ButtonProps) => {
  const navigate = useNavigate()

  const classes = [
    styles.button,
    variant === 'secondary'
      ? border
        ? styles.borderSecondary
        : styles.secondary
      : border
      ? styles.borderPrimary
      : styles.primary,
  ]

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
