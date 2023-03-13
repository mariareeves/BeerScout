import { Link } from 'react-router-dom'
import styles from './FooterPage.module.css'

export default function FooterPage() {
    return (
        <div className={styles['footer-page']}>
            <footer className={`footer is-small ${styles['footer-page']}`}>
                <div className="content has-text-centered">
                    <p className={styles['footer-text']}>
                        <strong className="has-text-white">BeerScout</strong> by <Link className="has-text-white" href="#">Maria Reeves</Link>,  <span>2023</span>.
                    </p>
                </div>
            </footer>
        </div>
    )

}