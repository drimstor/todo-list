import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo, useRef, useState } from 'react'
import { useAppSelector } from 'app/store/lib/hooks/hooks'
import { TypeFilter } from 'entities/todo/model/types'
import useClickOutside from 'shared/lib/hooks/useClickOutside'
import clsx from 'clsx'
import styles from './Select.module.scss'

interface iSelect {
  ul: string[]
  onChange: (item: TypeFilter) => void
}

function Select({ ul, onChange }: iSelect) {
  const [isOpen, setisOpen] = useState(false)
  const filter = useAppSelector((state) => state.todos.filter)
  const listRef = useRef<HTMLDivElement>(null)
  useClickOutside(listRef, () => setisOpen(false))

  const handleClickItem = (item: TypeFilter) => {
    onChange(item)
    setisOpen(false)
  }

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
          <li key={index} className={styles.item} onClick={() => handleClickItem(li as TypeFilter)}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Select)
