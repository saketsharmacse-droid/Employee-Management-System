import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext)

  //humein baar baar login naa krna pade:
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData =JSON.parse(loggedInUser)

      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    
  }, []);

  useEffect(() => {
  if (user === 'employee' && userData && loggedInUserData) {
    const stillExists = userData.some((e) => e.id === loggedInUserData.id)
    if (!stillExists) {
      alert('Your account data could not be found. Please log in again.')
      setUser(null)
      localStorage.setItem('loggedInUser', '')
    }
  }
}, [userData, user, loggedInUserData]);

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123')
      {
        setUser('admin') 
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
      }
        else if(userData)
        {
          const employee = userData.find((e) => email == e.email && password == e.password)
          if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
          }
        }
    else
      {
        alert("Invalid Credentials!")
      }
  }

  // handleLogin('user@me.com',123)

  // BUG: loggedInUserData is a one-time snapshot (set on login / on mount
  // from localStorage). It never updates again, so when the admin adds a
  // task to the shared `userData` in AuthContext, EmployeeDashboard (which
  // was receiving loggedInUserData directly) never sees the change.

  // FIX: on every render, look up this employee's CURRENT record from the
  // live context `userData` using the id stored in the snapshot. Since
  // `userData` updates (new array reference) whenever CreateTask runs,
  // this recalculates and EmployeeDashboard gets fresh data automatically.
  const currentEmployeeData = (loggedInUserData && userData)
    ? userData.find((e) => e.id === loggedInUserData.id)
    : loggedInUserData

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee'? <EmployeeDashboard changeUser={setUser} data={currentEmployeeData}/> : null)}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
      
    </div>
  );
}

export default App;