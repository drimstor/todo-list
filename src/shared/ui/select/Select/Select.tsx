import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { memo, useRef, useState } from 'react'
import styles from './Select.module.scss'
import { useAppSelector } from 'app/store/lib/hooks/hooks'
import useClickOutside from 'shared/lib/hooks/useClickOutside'

interface iSelect {
  ul: string[]
  onChange: (item: string) => void
}

function Select({ ul, onChange }: iSelect) {
  const [isOpen, setisOpen] = useState(false)
  const filter = useAppSelector((state) => state.todos.filter)
  const listRef = useRef<HTMLDivElement>(null)

  const handleClickItem = (item: string) => {
    onChange(item)
    setisOpen(false)
  }

  useClickOutside(listRef, () => setisOpen(false))

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.input, isOpen && styles.shadow)}
        ref={listRef}
        onClick={() => setisOpen(!isOpen)}
      >
        <p>{filter && filter}</p>
        <FontAwesomeIcon icon={faSortDown} className={clsx(isOpen && styles.rotateIcon)} />
      </div>

      <ul className={clsx(styles.select, isOpen && styles.show)}>
        {ul.map((li, index) => (
          <li key={index} className={styles.item} onClick={() => handleClickItem(li)}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Select)
