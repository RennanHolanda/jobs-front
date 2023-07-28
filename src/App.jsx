import { Outlet } from 'react-router-dom'
import styles from "./App.module.css"
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
   <div className={styles.container}>
    <Navbar />
    <Outlet />
    <Footer />
   </div>
  )
}

export default App
