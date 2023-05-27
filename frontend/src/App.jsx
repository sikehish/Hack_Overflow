import {BrowserRouter as Router, Routes, Route} from'react-router-dom';
import './App.css'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Forgot from './screens/Forgot';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/forgot' element={<Forgot/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
