import type { FormEvent } from 'react';
import { useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const Home = () => {
  const [itemname, setItemname] = useState('');
  const [itemvalue, setItemvalue] = useState(0);

  const register = async (e: FormEvent) => {
    e.preventDefault();

    await apiClient.item.post({
      body: {
        itemname,
        itemvalue,
        createdAt: new Date(),
      },
    });
  };

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
