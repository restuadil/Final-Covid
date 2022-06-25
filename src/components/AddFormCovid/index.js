import styles from "./Covid.module.css";
import image from "./covid.jpg";
import Button from "../Ui/Button";
import Title from "../Ui/Title";

function AddFormCovid () {
    return (
        <div className={styles.container}>
          <section className={styles.covid__form}>
            <div className={styles.covid__form__left}>
              <img
                className={styles.covid__form__image}
                src={image}
                alt=""/>
            </div>
            <div className={styles.covid__form__right}>
              <Title>Form Covid 19</Title>
              <form className={styles.form}>
                <div className={styles.form__group}>
                  <label className={styles.form__label} htmlFor="title">
                    Provinsi    
                  </label>
                  <select
                    className={styles.form__input}
                    id="type"
                    name="type">
                    <option value="Jakarta">Jakarta</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                    <option value="Jawa Tengah">Jawa Tengah</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                    <option value="Banten">Banten</option>
                    <option value="Yogjakarta">Yogjakarta</option>
                    <option value="Kalimantan Timur">Kalimantan Timur</option>
                    <option value="Bali">Bali</option>
                    <option value="Sumatra Utara">Sumatra Utara</option>
                    <option value="Riau">Riau</option>
                    <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                    <option value="Sumatra Barat">Sumatra Barat</option>
                    <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                    <option value="Kalimntn Selatan">Kalimntn Selatan</option>
                    <option value="Sumatra Selatan">Sumatra Selatan</option>
                    <option value="Lampung">Lampung</option>
                    <option value="Kepulauan Riau">Kepulauan Riau</option>
                    <option value="Bangka Belitung">Bangka Belitung</option>
                    <option value="Kalimantan Barat">Kalimantan Barat</option>
                    <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                    <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                    <option value="Sulawesi Utara">Sulawesi Utara</option>
                    <option value="Papua">Papua</option>
                    <option value="Kalumatan Utra">Kalimantan Utara</option>
                    <option value="Aceh">Aceh</option>
                    <option value="Jambi">Jambi</option>
                    <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                    <option value="Papua Barat">Papua Barat</option>
                    <option value="Bengkulu">Bengkulu</option>
                    <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                    <option value="Maluku">Maluku</option>
                    <option value="Sulawesi Barat">Sulawesi Barat</option>
                    <option value="Maluku Utara">Maluku Utara</option>
                    <option value="Gorontalo">Gorontalo</option>
                  </select>
                </div>
                <div className={styles.form__group}>
                  <label className={styles.form__label} htmlFor="year">
                    Status
                  </label>
                  <select
                    className={styles.form__input}
                    id="type"
                    name="type">
                    <option value="Positif">Positif</option>
                    <option value="Sembuh">Sembuh</option>
                    <option value="Di Rawat">Dirawat</option>
                    <option value="Meninggal">Meninggal</option>
                  </select>
                </div>
                <div className={styles.form__group}>
                  <label className={styles.form__label} htmlFor="type">
                    Jumlah
                  </label>
                  <input
                    className={styles.form__input}
                    name="type"
                    type="number">
                  </input>
                </div>
                <div className={styles.form__group}>
                  <Button>Submit</Button>
                </div>
              </form>
            </div>
          </section>
        </div>
    );
};

export default AddFormCovid;