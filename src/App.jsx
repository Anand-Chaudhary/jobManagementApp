import { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }    
  }, [])
  

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      const admin = authData.admin.find((e)=>email == e.email && e.password == password)
      setUser('admin');
      setLoggedInUserData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}))
    } 
    else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data:employee}))
      }
    } 
    else{
      alert('User doesnot exist');
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData} /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App
