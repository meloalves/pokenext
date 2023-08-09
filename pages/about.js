import Image from "next/image"

import styles from "../styles/About.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Este projeto foi desenvolvido durante o curso de Next.js do Youtube.</p>
      <Image 
        src="/images/charizard.png" 
        width={300} 
        height={300} 
        alt="Charizard"          
      />
    </div>    
  )
}