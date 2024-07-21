import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Login from './component/login'
import Register from './component/register'
import Home from './component/home'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
