import axios from "axios";

class DiscountService {

    _apiBase = 'http://localhost:8080'
    _aniKey = 'apikey=d60518144fc19c1f256d76330f8ac48c'

    //_baseOffset = 210

    config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
    }

    getResource = async (url) => {
        const res = await axios.get(url)
        return res
    }

    getResourceTest = async (url) => {
        const res = await axios.get(url, this.config)
        return res
    }

    createResource = async (url, data) => {
        const res = await axios.post(url, data)
        return res
    }

    updateResource = async (url, data) => {
        const res = await axios.put(url, data)
        return res
    }

    deleteResource = async (url) => {
        const res = await axios.delete(url)
        return res
    }

//<!----------------------------------------------->
//<!----------------------------------------------->
//<!----------------------------------------------->

    getSearchedResult = async (count, name) => {
        const result = await this.getResource(`${this._apiBase}/discount/search/${count}/${name}`)        
        return result
    }


    getDiscount = async (id) => {
        const result = await this.getResource(`${this._apiBase}/discount/${id}`)        
        return result
    }

    createDiscount = async (data) => {
        const result = await this.createResource(`${this._apiBase}/discount/`, data)        
        return result
    }

    updateDiscount = async (data) => {
        const result = await this.updateResource(`${this._apiBase}/discount/`, data)        
        return result
    }

    deleteDiscount = async (id) => {
        const result = await this.deleteResource(`${this._apiBase}/discount/${id}`)        
        return result
    }

    // _transformProduct = (char) => {
    //     return{
    //         id: char.id,
    //         name: char.name,
    //         description: char.description ? char.description : 'There is no description for this character',
    //         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    //         homepage: char.urls[0].url,
    //         wiki: char.urls[1].url,
    //         comics: char.comics.items
    //     }
    // }
}

export default DiscountService