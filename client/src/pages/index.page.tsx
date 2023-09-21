import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

type Item = {
  id: number;
  itemname: string;
  itemvalue: number;
  createdAt: Date;
};

const Home = () => {
  const [user] = useAtom(userAtom);
  const [items, setItems] = useState<Item[]>([]);
  const [selectedValue, setSelectedValue] = useState('new');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const itemsget = await apiClient.finditem.get();
      const nowitem: Item[] = [];
      itemsget.body.forEach((item) => {
        nowitem.push({
          id: item.id,
          itemname: item.itemname,
          itemvalue: item.itemvalue,
          createdAt: item.createdAt,
        });
      });
      console.log(nowitem);
      setItems(nowitem);
    };

    fetchItems();
  }, []);

  // const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
  //   setLabel(e.target.value);
  // };
  // const fetchTasks = async () => {
  //   const tasks = await apiClient.tasks.$get().catch(returnNull);

  //   if (tasks !== null) setTasks(tasks);
  // };
  // const createTask = async (e: FormEvent) => {
  //   e.preventDefault();
  //   if (!label) return;

  //   await apiClient.tasks.post({ body: { label } }).catch(returnNull);
  //   setLabel('');
  //   await fetchTasks();
  // };
  // const toggleDone = async (task: TaskModel) => {
  //   await apiClient.tasks
  //     ._taskId(task.id)
  //     .patch({ body: { done: !task.done } })
  //     .catch(returnNull);
  //   await fetchTasks();
  // };
  // const deleteTask = async (task: TaskModel) => {
  //   await apiClient.tasks._taskId(task.id).delete().catch(returnNull);
  //   await fetchTasks();
  // };

  let sorteditems = items.sort((a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
  });

  if (selectedValue === 'old') {
    sorteditems = items.sort((a, b) => {
      if (a.createdAt > b.createdAt) return 1;
      if (a.createdAt < b.createdAt) return -1;
      return 0;
    });
  } else if (selectedValue === 'low') {
    sorteditems = items.sort((a, b) => {
      if (a.itemvalue > b.itemvalue) return 1;
      if (a.itemvalue < b.itemvalue) return -1;
      return 0;
    });
  } else if (selectedValue === 'high') {
    sorteditems = items.sort((a, b) => {
      if (a.itemvalue > b.itemvalue) return -1;
      if (a.itemvalue < b.itemvalue) return 1;
      return 0;
    });
  }

  useEffect(() => {
    if (!user) return;
  }, [user]);

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <Link href="/register">
        <div className={styles.title} style={{ marginTop: '160px' }}>
          登録はこちらから
        </div>
      </Link>
      <div className={styles.base}>
        <div className={styles.head}>所持品リスト</div>
        <label className={styles.selectbox005}>
          <select>
            <option>optionの例1</option>
            <option>optionの例2</option>
            <option>optionの例3</option>
          </select>
        </label>
        {/* ソートを決めるのをselectでつける */}
        <label className={styles.selectbox002}>
          <select value={selectedValue} onChange={handleChange}>
            <option value="new">登録日の新しい順</option>
            <option value="old">登録日の古い順</option>
            <option value="low">価格の安い順</option>
            <option value="high">価格の高い順</option>
          </select>
        </label>
        <div className={styles.listed}>
          <ul>
            {sorteditems.map((item) => (
              <li className={styles.list} key={item.id}>
                <div className={styles.name}>{item.itemname}</div>
                <div>{item.itemvalue}円</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
