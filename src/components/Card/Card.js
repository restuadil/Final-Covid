import styles from "./Card.module.css"

function Card() {
    return (

        <div className={styles.card}>

            <div className={styles.card__covid}>
                <h2 className={styles.title__card}>Confirmed</h2>
                <h3 className={styles.subtitle__card__positif}> 6012818 </h3>
                    <p  className={styles.info__card}>
                        <a href="https://covid19.mathdro.id/api/countries/indonesia/confirmed"> More Info </a>
                    </p>
            </div>

            <div className={styles.card__covid}>
                <h2 className={styles.title__card}>Recovered</h2>
                <h3 className={styles.subtitle__card__sembuh}> 5750802 </h3>
                    <p className={styles.info__card}>
                        <a  href="https://covid19.mathdro.id/api/countries/indonesia/recovered"> More Info </a>
                    </p>
            </div>

            <div className={styles.card__covid}>
                <h2 className={styles.title__card}>Death</h2>
                <h3 className={styles.subtitle__card__meninggal}> 6.005.646 </h3>
                    <p  className={styles.info__card}>
                        <a className={styles.info__card} href="https://covid19.mathdro.id/api/countries/indonesia/deaths"> More Info </a>
                    </p>
            </div>
        </div>
    )
}


export default Card ;