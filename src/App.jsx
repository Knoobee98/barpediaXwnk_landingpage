import { useState } from 'react'
import cuyLogo from './assets/logo.svg'
import {Route, Routes} from 'react-router-dom'
import './App.css'

import Landingpage from "./page/landingpage"
import Aboutpage from "./page/aboutPage"
import Servicespage from "./page/servicesPage"
import Contactpage from "./page/contactPage"
import Navbar from "./components/navbar"
function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
        <Navbar/>
        <Routes>
            <Landingpage/>
            <Aboutpage/>
            <Servicespage/>
            <Contactpage/>
        </Routes>
        </div>
    )
}

export default App
