import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import Login from './components/login/Login';
import Patient from './components/patient/Patient';

function App() {
  const {pathname }= useLocation();
  const isLogin = pathname.includes("login")||pathname==="/"
  return (
    <div className="App">
       {/* {!isLogin && <Header/>} */}
       <Routes>
        <Route path='/' />
        <Route path="/doctor"  element={<DoctorDashboard/>}/> 
        <Route path="/login"  element={<Login/>}/>     
        
      </Routes>

    
 
   
    </div>
  );
}

export default App;
