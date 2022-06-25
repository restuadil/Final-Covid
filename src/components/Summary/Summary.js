import Title from "../Ui/Title";
import styles from "./Summary.module.css"

function Summary() {
    return (
        <div className={styles.summary}>
            <Title>Summary</Title>
            <p className={styles.subtitle}>Summary Data Global</p>
        </div>
    )
};


export default Summary;