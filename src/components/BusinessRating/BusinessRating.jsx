import styles from './BusinessRating.module.css'
import Rating from 'react-rating'
export default function ({ reviewCount, rating }) {
    return (
        <div className={styles.rating}>
            <Rating
                emptySymbol="fa fa-regular fa-star"
                fullSymbol="fa fa-solid fa-star"
                fractions={2}
                readonly
                initialRating={rating}
            />
            <p>{reviewCount} Reviews</p>
        </div>
    )
}