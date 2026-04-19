import { CounterValue } from '@/entities/counter';
import IncrementBtn from '@/features/increment-button';
import DecrementBtn from '@/features/decrement-button';

import styles from './CounterCard.module.scss'

const CounterCard = () => (
  <div className={styles.wrapper}>
    <DecrementBtn />
    <CounterValue />
    <IncrementBtn />
  </div>
)

export default CounterCard