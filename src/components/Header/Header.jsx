import React from 'react'
import styles from './header.module.css';
import logo from '../Assets/logo.svg';
import NavMenu from '../NavMenu/NavMenu';
import Search from '../Search/Search';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src={logo} alt="logotipo do blog escrito the blog"/>
        </div>
        <NavMenu/>
        <Search/>
    </header>
  )
}
