
import icon from '../assets/icon.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={icon}/>
      <div className={styles.textContainer}>
        <h1>Clínica</h1>
        <h1>Vida plena</h1>
      </div>
    </div>
  );
}
