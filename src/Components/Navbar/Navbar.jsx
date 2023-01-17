import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <>
    <header>
        <nav>
            <div className={styles.left}>
            <Link to='/' className={styles.left}>
            LOGO
            </Link>
           
            </div>
            <div className={styles.right}>
                <ul>
                    
                    <li> <Link to='/AddPage' className={styles.link}>Add Card</Link> </li>
                    <li> <Link to='/' className={styles.link}>Home</Link> </li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar