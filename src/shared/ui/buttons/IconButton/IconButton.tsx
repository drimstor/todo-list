import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './IconButton.module.scss'
import { memo } from 'react'

interface iIconButton {
  icon: IconProp
  onClick?: () => void
}

function IconButton({ icon, onClick }: iIconButton) {
  return (
    <div className={styles.iconButton} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default memo(IconButton)
