import React from 'react'
import styles from '../Hero/hero.module.css'
const Hero = () => {
  return (
    <div className={styles.container}>
        <div >
            <h1 className={styles.textname}>Hi I'm Mimic</h1>
            <p className={styles.textsub}>a web developer</p>
        </div>
    </div>
  )
}

export default Hero