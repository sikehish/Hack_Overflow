import {BrowserRouter as Router, Routes, Route} from'react-router-dom';
import './App.css'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Forgot from './screens/Forgot';
import Password from './screens/Password';
import Home from './screens/Home';
import Expense from './components/Expense';
import Expdis from './components/Expdis';
import Chart from './components/Chart';
import Bot from './screens/Bot';
import Table from './screens/Table';
import Blog from './screens/Blog'

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/forgot' element={<Forgot/>} />
          <Route path='/Password' element={<Password/>} />
          <Route path='/expense' element={<Table/>} />
          <Route path='/chart' element={<Chart/>} />
          <Route path='/bot' element={<Bot/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
