import listIcon from "../../assets/Clipboard.svg";
import { Task } from "./Task";
import styles from "./ListTasks.module.css";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
}

interface TasksListProps {
  tasks: Task[];
  onDelete: (task: string) => void;
}

export function ListTasks({ tasks, onDelete }: TasksListProps) {

  const [finishedTasks, setFinishedTasks] = useState(0);

  const emptyListMessage =
    <>
      <img src={listIcon} />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </>

  const taskList =
    <ul>
      {
        tasks.map(task => {
          return <Task 
            title={task.title} 
            finishTask={setFinishedTasks}
            onDelete={onDelete}
            key={task.id} />
        })
      }
    </ul>

  const tasksQuantity = tasks.length

  return (
    <section>
      <div className={styles.listInfos}>
        <div className={styles.created}>
          Tarefas criadas <span>{tasksQuantity}</span>
        </div>
        <div className={styles.finished}>
          Concluídas <span>{`${finishedTasks} de ${tasksQuantity}`}</span>
        </div>
      </div>
      <div className={`${styles.tasks} ${tasksQuantity !== 0 ? styles.withoutBorderAndPadding : ""}`}>
        {tasks.length === 0 ? emptyListMessage : taskList}
      </div>
    </section>
  )
}