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
        {/* ソートを決めるのをselectでつける */}
        <label className={styles.selectbox002}>
          <select>
            <option value="1">価格の安い順</option>
            <option value="2">価格の高い順</option>
            <option value="3">登録日の新しい順</option>
            <option value="4">登録日の古い順</option>
          </select>
        </label>
        <div className={styles.listed}>
          <ul>
            {items.map((item) => (
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
