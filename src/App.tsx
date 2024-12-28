import {Route, Routes} from 'react-router';
import './App.css'
import {BrowserRouter} from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";




function Main() {


    return (
        <>

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/aboutme" element={<AboutMe/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    )
}

export default Main
