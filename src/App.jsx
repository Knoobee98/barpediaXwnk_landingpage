import {Route, Routes} from 'react-router-dom'
import './App.css'

import Landingpage from "./page/landingpage"
import Aboutpage from "./page/aboutPage"
import Servicespage from "./page/servicesPage"
import Contactpage from "./page/contactPage"
import Orderpage from "./page/orderPage"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import NotFoundPage from "./page/notFoundPage"

function App() {

    return (
        <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="/services" element={<Servicespage/>}/>
            <Route path="/contact" element={<Contactpage/>}/>
            <Route path="/order" element={<Orderpage/>}/>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
        </div>
    )
}

export default App
