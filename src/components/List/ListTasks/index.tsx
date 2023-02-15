import listIcon from "../../../assets/Clipboard.svg";
import styles from "./ListTasks.module.css";

export function ListTasks() {
  return (
    <section>
      <div className={styles.listInfos}>
        <div className={styles.created}>
          Tarefas criadas <span>0</span>
        </div>
        <div className={styles.finished}>
          Concluídas <span>0</span>
        </div>
      </div>
      <div className={styles.tasks}>
        <img src={listIcon} />
        <p>
          Você ainda não tem tarefas cadastradas
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </div>
    </section>
  )
}