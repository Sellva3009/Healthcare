import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import Patient from './components/patient/Patient';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';

function App() {
  const {pathname }= useLocation();
  const isLogin = pathname.includes("login")||pathname==="/"
  return (
    <div className="App">
       {/* {!isLogin && <Header/>} */}
       <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/doctor"  element={<DoctorDashboard/>}/> 
        <Route path="/login"  element={<Login/>}/>     
        
      </Routes>

    
 
   
    </div>
   
  );
}

export default App;
