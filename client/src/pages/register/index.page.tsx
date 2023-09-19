import styles from './index.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.base}>
        <div className={styles.head}>
          <div>バーコードの画像を入力してください</div>
          <button className={styles.btn}>アップロード</button>
        </div>
      </div>
    </>
  );
};

export default Home;
