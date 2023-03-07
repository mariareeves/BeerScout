import styles from './FooterPage.module.css'

export default function FooterPage() {
    return (
        <div className={styles['footer-page']}>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <strong>BeerScout</strong> by <a href="#">Maria Reeves</a>,  <span>2023</span>.
                    </p>
                </div>
            </footer>
        </div>
    )

}