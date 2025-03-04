import RecentProjects from "../RecentProjects/RejcentProjects";
import constructionImage from "/main.jpg";
import styles from "../Home/home.module.scss";

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <img
          src={constructionImage}
          alt="Строителна дейност"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h4>Дянков ЕООД</h4>
          <h1>Строителни Услуги</h1>
          <p>Качествени решения за вашия дом или бизнес.</p>
          <div className={styles.buttons}>
            <button className={styles.button}>Направи запитване</button>
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Нашите най-скорошни обекти</h2>
        <RecentProjects />
      </section>
    </>
  );
}

export default Home;
