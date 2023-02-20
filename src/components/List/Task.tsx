import { useState, Dispatch } from 'react'
import { Trash, Check } from 'phosphor-react'
import styles from './Task.module.css'

interface Task {
  title: string
  finishTask: Dispatch<React.SetStateAction<number>>
  onDelete: (task: string) => void
}

export function Task({ title, finishTask, onDelete }: Task) {
  const [isFinished, setIsFinished] = useState(false)

  function handleFinishTask() {
    setIsFinished(!isFinished)
    finishTask(prevState => prevState + 1)
  }

  return (
    <li className={styles.task} title="Abrir tarefa">
      <div>
        <div className={styles.checkTask}>
          <input type="checkbox" 
            onChange={handleFinishTask} 
            checked={isFinished} 
            title="Concluir tarefa" 
          />
          <span className={styles.checkmarkTask}>
            <Check size={15} />
          </span>
        </div>
        <h4 title="Nome da tarefa" className={isFinished ? styles.taskChecked : ''}>{title}</h4>
      </div>
      <button title="Deletar tarefa" onClick={() => onDelete(title)}>
        <Trash size={20} />
      </button>
    </li>
  )
}