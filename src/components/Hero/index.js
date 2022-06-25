import styles from "./Hero.module.css";
import image from "../Hero/vaccine.jpg"
import Button from "../Ui/Button";
import Title from "../Ui/Title";
import Subtitle from "../Ui/Subtitle/Subtitle";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <Title> Covid ID </Title>
                    <Subtitle> Monitoring Perkembangan Covid </Subtitle>
                    <p className={styles.hero__description} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntsuscipit sapiente ipsum soluta at repudiandae deserunt incidunt error illum reprehenderit! </p>
                    <Button>
                        <a className={styles.a} href="https://www.pedulilindungi.id/"> Vaccine </a>
                    </Button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src={image} alt="logo" srcset=""></img>
                </div>
            </section>
        </div>
    );
  }
  
  export default Hero;
  