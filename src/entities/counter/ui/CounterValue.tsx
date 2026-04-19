import { useSelector } from 'react-redux';

export const CounterValue = () => {
  const value = useSelector((state: any) => state.counter.value);
  return <h3>Count: {value}</h3>;
}