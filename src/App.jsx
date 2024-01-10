
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Setting from './pages/Setting'
import Payment from './pages/Payment'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </>
  )
}

export default App
