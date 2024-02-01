import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
        <h1>Sobre o projeto
        </h1>
        <p>Projeto criado durante aulas sobre Next.js do Canal de Youtube Hora de Codar.</p>
        <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    )
}