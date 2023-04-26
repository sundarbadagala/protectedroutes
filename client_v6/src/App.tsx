import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from "./utils/privateRoute"
import PublicRoutes from './utils/publicRoute'

import Home from './pages/home'
import Login from './pages/login'
import Error from './pages/error'
import Reg from './pages/register'

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path='/' />
        <Route element={<Error />} path='*' />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<Login />} path='/login' />
        <Route element={<Reg />} path='/reg' />
      </Route>
    </Routes>
  )
}

export default App
