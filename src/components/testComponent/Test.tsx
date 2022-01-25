import styles from "./test.module.scss";

const Test = () => {
  return (
    <>
      <p className={styles.title}> Заголовок тестового компонента</p>
      <div className={styles.block}>тестовй блок</div>
    </>
  );
};

export default Test;
