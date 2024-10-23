import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { clearAuthentication } from "../login/LoginLogic";
import { useAuthentication } from "../login/AuthenticationContext";
import { useState } from "react";
import { getPatienByID, getPatient } from "../../Services/HealthcareServices";

function DoctorDashboard() {
  const navigate = useNavigate()
  const [patientList, setPatientList]=useState([])
  const {id}= useParams()
  console.log(id)
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuthentication()
  const handleLogout = () => {
    clearAuthentication()
    setIsLoggedIn(false)
    navigate('/')
  }
  const onHandlePatients=(id)=>{
    getPatienByID(id).then(res=>console.log(res.data))
  }
  return (
    <>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="p-3 border bg-light"> <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <button onClick={()=>onHandlePatients(id)}>PatientList </button></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Appointmenst</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Messages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <button onClick={handleLogout}>Logout </button></a>
              </li>

            </ul></div>
          </div>
          <div class="col-md-6">
            <div class="p-3 border bg-light">
              <p> Today's Appoinments</p>
              <table class="table">

                <thead>

                  <tr>
                    <th scope="col">Sl.no</th>
                    <th scope="col">Time</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>

                </tbody>
              </table></div>
          </div>
          <div class="col-md-6">
            <div class="p-3 border bg-light">
              <p> Recent  Patients</p>
              <table class="table">

                <thead>

                  <tr>
                    <th scope="col">Sl.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Visit</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>

                </tbody>
              </table></div>
          </div>
        </div>
      </div>
    </>


  );
}

export default DoctorDashboard;