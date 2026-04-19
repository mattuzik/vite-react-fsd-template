import { useDispatch } from 'react-redux'
import { decrement } from '@/entities/counter'
import Button from '@/shared/ui/Button'

const DecrementBtn = () => {
  const dispatch = useDispatch()
  return <Button onClick={() => dispatch(decrement())}>-</Button>
}

export default DecrementBtn