import styles from './HeroPage.module.css'

export default function HeroPage() {
    return (
        <div>
            <section className="hero is-success is-large">
                <div className="hero-head">
                    <div className="container">
                        <h1 className="title has-text-centered is-size-1 mt-6">
                            BeerScout
                        </h1>
                        <p className="subtitle has-text-centered is-size-4">
                            Your favorite brewery finder
                        </p>
                    </div>
                </div>
                <div className="hero-body has-text-centered">
                    <div className="container">
                    </div>
                </div>
            </section>
        </div>
    )
}