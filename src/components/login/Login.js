import React, { useState } from 'react'
import '../login/LoginForm.css'
 
//import hooks
import { useNavigate } from 'react-router-dom'
 
//import context &import { useAuth } from './AuthContext'
import { checkValidUser, setAuthentication } from './LoginLogic'
import { useAuthentication } from './AuthenticationContext'
 
export default function LoginForm() {
 
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuthentication()
 
    const LoginSubmit = async () => {
        const checkvalue = await checkValidUser(user, password).then(res => res)
        console.log(checkvalue)
        if (checkvalue) {
            await setAuthUser({
                useremail: checkvalue.useremail,
                role: checkvalue.role
            })
            setIsLoggedIn(true)
            setAuthentication()
            console.log(authUser)
            navigate('/doctor')
        } else {
            alert('Login failed')
        }
        console.log(user)
    }
 
 
    const RegistrationForm = () => {
      navigate('/doctor')
    }
 
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
 
    return (
        <div className='wrapper d-flex align-items-center justify-content-center w-100'>
            <div className='login'>
                <h2 className='mb-3'> Login Form</h2>
                <form className='needs-validation'>
                    <div className='form-group was-validated mb-2'>
                        <label for="email" className='form-label'>Email Address</label>
                        <input type="email" className='form-control' onChange={(e) => setUser(e.target.value)} required />
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label for="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type='button' className='btn btn-success w-100 mt-2' onClick={() => LoginSubmit()}>SIGN IN</button>
 
                    <div className='form-group was-validated mb-2'>
                        <button type='button' className='btn btn-success w-100 mt-2' onClick={() => RegistrationForm()}>Register here</button>
                    </div>
 
                </form>
            </div>
        </div>
    )
}