import React from 'react'
import styles from './navMenu.module.css'
export default function NavMenu() {
  // Por algum motivo que ainda vou descobrir a tag "Link" nao estava funcionado, por isso utilizei a tag a.
  return (
    <nav className={styles.menu}>        
        <a href="/">Home</a>
        <a href="/sobre">sobre</a>
        <a href="/categorias">Categorias</a>
        <a href="/contato">Contato</a>
    </nav>
  )
}
