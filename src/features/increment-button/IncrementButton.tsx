import { useDispatch } from 'react-redux'
import { increment } from '@/entities/counter'
import Button from '@/shared/ui/Button'

const IncrementBtn = () => {
  const dispatch = useDispatch()
  return <Button onClick={() => dispatch(increment())}>+</Button>
};

export default IncrementBtn