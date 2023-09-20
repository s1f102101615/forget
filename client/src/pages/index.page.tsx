import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

type Item = {
  id: number;
  name: string;
  value: number;
};

const Home = () => {
  const [user] = useAtom(userAtom);

  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 },
  ]);

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
        <div className={styles.listed}>
          <ul>
            {items.map((item) => (
              <li className={styles.list} key={item.id}>
                <div className={styles.name}>{item.name}</div>
                <div>{item.value}円</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
