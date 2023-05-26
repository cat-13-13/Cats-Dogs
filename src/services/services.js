import axios from 'axios'

class CatService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.thecatapi.com/v1/images/search'
        })
    }


    getRandomCat() {
        return this.api.get('/')
    }

    getTenCats() {
        return this.api.get('/?limit=10')
    }
}

const catService = new CatService()

export default catService