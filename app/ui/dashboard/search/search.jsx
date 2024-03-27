import styles from './search.module.scss'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder = 'Search...' }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  )
}

export default Search
