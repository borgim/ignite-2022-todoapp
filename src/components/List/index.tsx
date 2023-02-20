import { ChangeEvent, FormEvent, useState } from "react";
import { ListTasks } from "./ListTasks";
import plusIcon from '../../assets/plus.svg';
import styles from "./List.module.css";

interface Task {
  id: number;
  title: string;
}

export function List() {
  const [tasks, setTasks] = useState<Task[]>([])

  const [newTask, setNewTask] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { title: newTask, id: tasks.length + 1 }])
    setNewTask('')
  }

  function handleTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setNewTask(value);
  }

  function handleDeleteTask(taskTitle: string) {
    const newTasksListWithoutDeletedTask = tasks.filter(task => taskTitle !== task.title)

    setTasks([...newTasksListWithoutDeletedTask])
  }

  return (
    <main className={styles.container}>
      <form className={styles.createForm} onSubmit={handleCreateTask} >
        <input type="text" name="taskTitle" placeholder="Adicione uma nova tarefa" className={styles.createInput} onChange={handleTaskTitle} value={newTask} />
        <button type="submit" className={styles.createSubmitButton}>
          Criar
          <img src={plusIcon} />
        </button>
      </form>
      <ListTasks tasks={tasks} onDelete={handleDeleteTask} />
    </main>
  )
}