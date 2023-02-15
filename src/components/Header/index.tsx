import Logo from '../../assets/todo-logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={Logo} alt="" />
    </header>
  )
}