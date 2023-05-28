import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import catService from "../../services/cat-services"
import dogService from "../../services/dog-services"
import Gallery from "../../components/Gallery/Gallery"
import './GalleryPage.css'


const GalleryPage = () => {

    const [cat, setCat] = useState()
    const [dog, setDog] = useState()

    const { pathname } = useLocation()

    useEffect(() => {
        pathname === '/cats' ? loadCat() : loadDog()
    }, [pathname])


    const loadCat = () => {
        catService
            .getRandomCat()
            .then(({ data }) => {
                setCat(...data)
            })
            .catch(err => console.log(err))
    }

    const loadTenCats = () => {
        catService
            .getTenCats()
            .then(({ data }) => {
                setCat(data)
            })
            .catch(err => console.log(err))
    }

    const loadDog = () => {
        dogService
            .getRandomDog()
            .then(({ data }) => {
                setDog(data)
            })
            .catch(err => console.log(err))
    }

    const loadThreeDogs = () => {
        dogService
            .getThreeDogs()
            .then(({ data }) => {
                setDog(data.message)
            })
            .catch(err => console.log(err))
    }


    return (

        pathname === '/cats' ?

            <Gallery title={`CAT'S`} data={cat} functionOne={loadCat} functionMultiple={loadTenCats} />

            :

            <Gallery title={`DOG'S`} data={dog} functionOne={loadDog} functionMultiple={loadThreeDogs} />

    )
}

export default GalleryPage