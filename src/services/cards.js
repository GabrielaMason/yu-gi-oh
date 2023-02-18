import axios from "axios";

const baseUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

//Petición get a la API
export const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data //cartas
}
