import React from 'react'
import styles from '../Navbar/navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <p>About</p>
      <p>Work</p>
      <p>Contact</p>
      
      
      </div>
      
    </div>
  )
}

export default Navbar