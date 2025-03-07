import styles from "../NotFound/NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Страницата, която търсите, не съществува.</p>
      <a href="/">Обратно към началната страница</a>
    </div>
  );
}

export default NotFound;
