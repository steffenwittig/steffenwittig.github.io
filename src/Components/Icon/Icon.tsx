import { forwardRef } from 'react'
import styles from './Icon.module.scss'

interface IIconProps {
  icon: React.ReactNode
  className?: string
  color?: 'primary' | 'primary-inverse' | 'secondary' | 'contrast' | 'default'
}

export const Icon = forwardRef<HTMLDivElement, IIconProps>(({ className, icon, color = 'default' }, ref) => {
  return (
    <div ref={ref} className={`${className} ${styles[color]}`}>
      {icon}
    </div>
  )
})
