import { CreateTask } from "./CreateTask";
import styles from "./List.module.css";
import { ListTasks } from "./ListTasks";

export function List() {
  return (
    <main className={styles.container}>
      <CreateTask />
      <ListTasks />
    </main>
  )
}