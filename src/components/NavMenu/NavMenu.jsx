import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import styles from './navMenu.module.css'
export default function NavMenu() {
  return (
    <nav className={styles.menu}>
        <MenuItem path="Home"/>
        <MenuItem path="Sobre"/>
        <MenuItem path="Categorias"/>
        <MenuItem path="Contato"/>
    </nav>
  )
}
