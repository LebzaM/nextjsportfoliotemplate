import React from 'react'
import styles from '../Projects/project.module.css'
import Image from 'next/image'

const Project = () => {
  return (
    <>
    <div className={styles.container}>
        <div>
            <h1  className={styles.text}>These are some of my projects</h1>
        </div>
        
    </div>
    <div className={styles.wrapper}>
    <div className={styles.grid}>
    <div style={{backgroundColor:'#303841', height:'75%', cursor:'pointer'}}>
      <Image src="/tribute.jpg" width={384} height={300}  alt="Picture of the author"/>
      <p style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bolder', fontFamily:'Poppins'}}>Tribute Page</p>
    </div>
    <div style={{backgroundColor:'#303841', height:'75%', cursor:'pointer'}}>
      <Image src="/tribute.jpg" width={384} height={300}  alt="Picture of the author"/>
      <p style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bolder', fontFamily:'Poppins'}}>Tribute Page</p>
    </div>
    <div style={{backgroundColor:'#303841', height:'75%', cursor:'pointer'}}>
      <Image src="/tribute.jpg" width={384} height={300}  alt="Picture of the author"/>
      <p style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bolder', fontFamily:'Poppins'}}>Tribute Page</p>
    </div>
    <div style={{backgroundColor:'#303841', height:'75%', cursor:'pointer'}}>
      <Image src="/tribute.jpg" width={384} height={300}  alt="Picture of the author"/>
      <p style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bolder', fontFamily:'Poppins'}}>Tribute Page</p>
    </div>
    <div style={{backgroundColor:'#303841', height:'75%', cursor:'pointer'}}>
      <Image src="/tribute.jpg" width={384} height={300}  alt="Picture of the author"/>
      <p style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bolder', fontFamily:'Poppins'}}>Tribute Page</p>
    </div>
    <div style={{backgroundColor:'#303841', height:'75%', cursor:'pointer'}}>
      <Image src="/tribute.jpg" width={384} height={300}  alt="Picture of the author"/>
      <p style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bolder', fontFamily:'Poppins'}}>Tribute Page</p>
    </div>

  </div>
  </div>
  </>
  )
}

export default Project