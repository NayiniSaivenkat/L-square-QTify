import React from 'react'
import styles from '../Search/Search.module.css'
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'
const Search = ({placeholder}) => {
  return (
    <form className={styles.wrapper} >
        <div>
            <input className={styles.search} placeholder={placeholder} />
        </div>
        <div>
        <button className={styles.searchButton} type="submit">
        <SearchIcon/>
        </button>
        </div>
    </form>
  )
}

export default Search