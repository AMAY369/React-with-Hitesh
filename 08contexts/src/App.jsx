
import './App.css'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserContextProvider'

function App(){
  return(
    <UserContextProvider>
      <h1>React with ABHAY</h1>
      <LogIn/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
