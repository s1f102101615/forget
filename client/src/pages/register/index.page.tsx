import Link from 'next/link';
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
      <div>
        {/* <div className={styles.head}>
          <div>バーコードの画像を入力してください</div>
          <button className={styles.btn}>アップロード</button>
        </div> */}
        <Link href="../">
          <div className={styles.back}>所持品リストに戻る</div>
        </Link>
        <div className={styles.base}>
          <div className={styles.title}>商品登録</div>
          <form onSubmit={register}>
            <div className={styles.form}>
              <div className={styles.itemname}>
                <label>商品名</label>
                <input
                  className={styles.cformtext}
                  type="text"
                  value={itemname}
                  onChange={(e) => setItemname(e.target.value)}
                />
              </div>
              <div className={styles.itemvalue}>
                <label>金額</label>
                <input
                  className={styles.cformtext}
                  type="number"
                  value={itemvalue}
                  onChange={(e) => setItemvalue(Number(e.target.value))}
                />
              </div>
            </div>
            <button className={styles.btn} type="submit">
              登録
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
