import { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext);
  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
    }
  }, [authData])
  

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
    } 
    else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('user');
    } 
    else{
      alert('User doesnot exist')
    }
  }

  
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
