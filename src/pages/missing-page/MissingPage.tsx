import { NavLink } from 'react-router-dom'
import styles from './missing.module.scss'
import { urlArr } from '@/shared/config/variables'

const MissingPage = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.text}>This page doesn't exist</h2>
      <NavLink to={urlArr.home} className={styles.link}>Visit our homepage</NavLink>
    </main>
  )
}

export default MissingPage