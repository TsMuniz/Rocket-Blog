import React from 'react'
import styles from './search.module.css'
import search from '../Assets/search.svg'

export default function Search() {
  return (
    <div className={styles.search}>
        <input placeholder='Buscar' type="text" />
        <span>
            <img src={search} alt="icone de uma lupa" />
        </span>
    </div>
  )
}
