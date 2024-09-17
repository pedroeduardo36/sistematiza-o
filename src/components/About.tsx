import styles from './About.module.css'

export function About() {
  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>
        <strong className={styles.title}>Quem somos?</strong>
        <span>
          Na Clínica Vida Plena, acreditamos que saúde é mais do que a ausência
          de doenças é o equilíbrio entre corpo, mente e bem-estar. Oferecemos
          um atendimento integral, personalizado e humanizado, com uma equipe
          multidisciplinar dedicada a promover a saúde em todas as suas
          dimensões. Com serviços que vão desde consultas médicas, exames
          laboratoriais e de imagem até aconselhamento nutricional, estamos
          comprometidos em cuidar de você de forma completa. Nosso objetivo é
          proporcionar um ambiente acolhedor e seguro, onde cada paciente recebe
          a atenção que merece para viver de forma plena e saudável.
        </span>
      </div>
    
      <img src='https://plus.unsplash.com/premium_photo-1661581069635-765f835a1a52?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  );
}
