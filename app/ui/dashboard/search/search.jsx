'use client'

import { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './search.module.scss'
import useDebounce from '@/app/hooks/useDebounce'

const Search = ({ placeholder = 'Search...' }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 300)

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (debouncedSearchValue && debouncedSearchValue.length > 2) {
      params.set('q', debouncedSearchValue)
    } else {
      params.delete('q')
    }

    replace(`${pathname}?${params}`)
  }, [debouncedSearchValue])

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
