import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import s from './Input.module.scss'
import { ChangeEvent, memo } from 'react'

interface iInput {
  placeholder: string
  name: string
  icon?: IconDefinition
  error?: boolean
  errorText?: string
}

function Input({ placeholder, icon, error, errorText, name }: iInput) {
  return (
    <div className={clsx(error && s.error, s.inputWrapper)}>
      {!!icon && <FontAwesomeIcon icon={icon} />}
      <input placeholder={placeholder} type={'text'} name={name} />
      <div className={s.errorText}>{errorText && errorText}</div>
    </div>
  )
}

export default memo(Input)
