import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo } from 'react'
import styles from './IconButton.module.scss'

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
