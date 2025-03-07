import RecentProjects from "../RecentProjects/RejcentProjects";
import constructionImage from "/main.jpg";
import {useNavigate} from "react-router-dom"
import styles from "../Home/home.module.scss";


function Home() {

  const navigate = useNavigate();
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
          <h1>Проектиране, строителство и геодезия</h1>
          <p>От идея до реалност – с грижа и прецизност</p>
          <div className={styles.buttons}>
            <button onClick={()=>{navigate("/contacts")}} className={styles.button}>Направи запитване</button>
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
