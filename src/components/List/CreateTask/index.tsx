import plusIcon from '../../../assets/plus.svg'
import styles from './Create.module.css'

export function CreateTask() {
  return (
    <>
      <form className={styles.createForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" className={styles.createInput} />
        <button type="submit" className={styles.createSubmitButton}>
          Criar
          <img src={plusIcon} />
        </button>
      </form>
    </>
  )
}