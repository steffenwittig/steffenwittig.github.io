import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Button.module.scss'

type ButtonProps = {
  title: string
  onClick?: () => void
  variant?: 'border' | 'link'
  to?: string
  icon?: JSX.Element
}

export const Button = ({ title, onClick, variant, to, icon, children }: PropsWithChildren<ButtonProps>) => {
  const navigate = useNavigate()

  const classes = [styles.button, variant ? styles[variant] : '']

  const handleClick = () => {
    if (onClick) onClick()
    if (to) navigate(to)
  }

  return (
    <button title={title} onClick={handleClick} className={classes.join(' ')}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div>{children ? children : title}</div>
    </button>
  )
}
