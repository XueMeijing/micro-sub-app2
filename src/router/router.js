import { Routes, Route, Navigate } from 'react-router-dom'

import Expenses from '../pages/Expenses'
import Test from '../pages/Test'

const Routers = () => {
  return (
    <Routes>
      <Route path='/main/expenses' element={<Expenses />} />
      <Route path='/main/test' element={<Test />} />
      <Route path='/*' element={<Navigate to='/main/expenses' />} />
    </Routes>
  )
}

export default Routers