import clsx from 'clsx'
import { ReactNode, memo } from 'react'
import styles from './Button.module.scss'

interface iButton {
  children: ReactNode
  variant: 'outlined' | 'contained'
  size: 'medium' | 'small'
  onClick?: () => void
  typeSubmit?: boolean
  error?: boolean
}

function Button({ children, variant, size, onClick, typeSubmit, error }: iButton) {
  return (
    <button
      onClick={onClick}
      type={typeSubmit ? 'submit' : 'button'}
      className={clsx(styles[size], styles[variant], error && styles.error)}
    >
      {children}
    </button>
  )
}

export default memo(Button)
