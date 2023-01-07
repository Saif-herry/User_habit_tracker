import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Habits } from './Pages/Habits';
import { Profile } from './Pages/Profile';
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
              <Routes>
                <Route path='/' element={<Profile/>}   />
                <Route path='/login' element={<Login/>}   />
                <Route path='/signup' element={<Signup/>}   />
                <Route path='/habit' element={<Habits/>}   />
              </Routes>
    </div>
  );
}

export default App;