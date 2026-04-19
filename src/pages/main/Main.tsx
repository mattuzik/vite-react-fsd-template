import CounterCard from "@/widgets/counter-card/ui";
import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={`container ${styles.wrapper}`}>
      <CounterCard />
    </main>
  )
}

export default Main