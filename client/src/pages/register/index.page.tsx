import Link from 'next/link';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const Home = () => {
  const [itemname, setItemname] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [newItemType, setNewItemType] = useState('');
  const [itemvalue, setItemvalue] = useState(0);
  const [itemTypes, setItemTypes] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

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

  const handleAddItemType = async () => {
    setItemTypes([...itemTypes, newItemType]);
    const label = [...itemTypes, newItemType];
    await apiClient.userlabel.post({
      body: {
        label,
      },
    });
    setNewItemType('');
  };

  useEffect(() => {
    const fetchlabels = async () => {
      const labelget = await apiClient.findlabel.get();
      if (labelget.body?.label === undefined) return;
      setItemTypes(labelget.body?.label);
    };
    fetchlabels();
  }, []);

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
          <label className={styles.selectbox002}>
            商品の種類：
            <select value={selectedValue} onChange={handleChange}>
              <option value="">選択してください</option>
              {itemTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          {/* 商品の種類を追加する */}
          <input
            type="text"
            className={styles.textbox003}
            value={newItemType}
            placeholder="新しい商品の種類を追加"
            onChange={(e) => setNewItemType(e.target.value)}
          />
          <button onClick={handleAddItemType}>商品の種類を追加</button>

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
