import { About } from "../About/About.js"
import { Home } from "../Home/Home.js"
import { Route, Routes } from "react-router-dom"
import { Header } from "../Nav/Header.js"

export const ApplicationViews = () => {
    return <>
    <Header />
        <Routes>        
            <Route path="/" element={<Home />}/>
            <Route path="aboutme" element={<About />} />
        </Routes>
    </>
}