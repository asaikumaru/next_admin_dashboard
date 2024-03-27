import styles from '@/app/ui/login/login.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={'login'} className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
