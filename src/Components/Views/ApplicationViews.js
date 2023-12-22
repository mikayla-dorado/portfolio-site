import { About } from "../About/About.js"
import { Home } from "../Home/Home.js"
import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <Routes>        
            <Route path="/" element={<Home />}/>
            <Route path="aboutme" element={<About />} />
        </Routes>
    </>
}