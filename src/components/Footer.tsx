import styles from './Footer.module.css'
import icon from '../assets/icon.svg'

export function Footer() {
    return (
        <div className={styles.footer}>
        <img src={icon}/>
        <strong>Vida Plena</strong>
        </div>

    )
}