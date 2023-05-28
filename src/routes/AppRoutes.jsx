import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import GalleryPage from "../pages/GalleryPage/GalleryPage"


const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cats" element={<GalleryPage />} />
            <Route path="/dogs" element={<GalleryPage />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>

    )
}

export default AppRoutes