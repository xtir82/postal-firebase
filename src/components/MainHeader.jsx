import React from 'react'
import { MdPostAdd, MdMessage } from 'react-icons/md'
import styles from './MainHeader.module.css'
import {Link} from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.logo}>
            <MdMessage />
            React Postal Firebase Version
        </h1>
        <p>
            <Link to="/create-post" className={styles.button} >
                <MdPostAdd size={18} /> 
                New Post
            </Link>
        </p>

    </header>
  )
}

export default MainHeader;