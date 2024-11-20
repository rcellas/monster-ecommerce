import axios from "axios";

const apiMonstersUrl = "http://localhost:3000/monsters"

const getAllMonsters = async () => {
    const response = await axios.get(apiMonstersUrl)
    return response.data;
}

const createMonsters = async (newProduct) => {
    const response = await axios.post(apiMonstersUrl, newProduct)
    return response.data;
}


export {
    getAllMonsters,
    createMonsters
}