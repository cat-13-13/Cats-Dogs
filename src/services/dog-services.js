import axios from 'axios'


class DogService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://dog.ceo/api/',
        })
    }


    getRandomDog() {
        return this.api.get('/breeds/image/random')
    }

    getThreeDogs() {
        return this.api.get('/breeds/image/random/3')
    }
}

const dogService = new DogService()

export default dogService