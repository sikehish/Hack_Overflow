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
        </Routes>
      </Router>
    </>
  )
}

export default App
