import React from 'react'
import { Link } from 'react-router-dom'
import styles from './menuItem.module.css'
export default function MenuItem({ path }) {
    return (
    <Link className={styles.link} to={`/${path}`}>{path}</Link>
    )
}
