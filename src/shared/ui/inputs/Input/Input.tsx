import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo } from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss'

interface iInput {
  placeholder: string
  name: string
  icon?: IconDefinition
  error?: boolean
  errorText?: string
}

function Input({ placeholder, icon, error, errorText, name }: iInput) {
  return (
    <div className={clsx(error && styles.error, styles.inputWrapper)}>
      {!!icon && <FontAwesomeIcon icon={icon} />}
      <input placeholder={placeholder} type={'text'} name={name} />
      <div className={styles.errorText}>{errorText && errorText}</div>
    </div>
  )
}

export default memo(Input)
