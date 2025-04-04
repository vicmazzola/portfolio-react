import {Route, Routes} from 'react-router';
import './App.css'
import {BrowserRouter} from "react-router";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Background from "./components/Background/Background.tsx";
import ScrollToTop  from "./components/ScrollToTop/ScrollToTop.tsx";
import ContactMe from "./components/ContactMe/ContactMe.tsx";


function Main() {

    return (
        <>

            <BrowserRouter>
                <ScrollToTop />
                <Background/>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/aboutme" element={<AboutMe/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<ContactMe/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    )
}

export default Main
