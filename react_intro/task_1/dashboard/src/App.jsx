
import './App.css'
import {getCurrentYear} from "./utils.js" 
import Notifications from './Notifications.jsx'

function App() {
  return (
    <>
    <div className='root-notifications'><Notifications /></div>
      <div className='App-header' alt="holberton logo">
        <img src="src/assets/holberton-logo.jpg" alt="holberton logo" ></img>
        <h1 role="heading">School dashboard</h1>
      </div>
      <div className='App-body'><p>Login to access the full dashboard</p></div>
      <div className='App-footer'><p>Copyright {getCurrentYear()} - holberton School</p></div>
    </>
  )
}

export default App
