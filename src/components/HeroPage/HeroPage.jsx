import styles from './HeroPage.module.css'

export default function HeroPage() {
    return (
        <div>
            <section className="hero is-success is-halfheight">
                <div className="hero-body">
                    <div className="">
                        <p className="title">
                            BeerScout
                        </p>
                        <p className="subtitle">
                            Your favorite brewery finder
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}