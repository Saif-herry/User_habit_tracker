import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Habits } from './Pages/Habits';
import { Profile } from './Pages/Profile';
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
              <Routes>
               
                <Route path='/profile' element={<Profile/>}   />
                <Route path='/login' element={<Login/>}   />
                <Route path='/' element={<Signup/>}   />
                <Route path='/habit' element={<Habits/>}   />
              </Routes>
    </div>
  );
}

export default App;