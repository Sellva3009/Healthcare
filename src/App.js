import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App">  
     <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path='/register' element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;
