import axios from "axios";

class ProductService {

    _apiBase = 'http://localhost:8080'
    _aniKey = 'apikey=d60518144fc19c1f256d76330f8ac48c'

    _baseOffset = 210

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

    createResource = async (url, file, data) => {

        const formData = new FormData();
        formData.append('file', file); // замените file на ваш файл
        formData.append('data', JSON.stringify(data));

        const res = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
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
        const result = await this.getResource(`${this._apiBase}/product/search/${count}/${name}`)
        return result
    }

    getAllCharacters = async () => {
        const result = await this.getResource(`${this._apiBase}characters?${this._aniKey}`)
        return result.data.data.results.map(this._transformCharacter)
        //return result
    }

    getSomeCharacters = async (limit, offset = this._baseOffset) => {
        const result = await this.getResource(`${this._apiBase}characters?limit=${limit}&offset=${offset}&${this._aniKey}`)
        return result.data.data.results.map(this._transformCharacter)
        //return result
    }

    getProduct = async (id) => {
        const result = await this.getResource(`${this._apiBase}/product/${id}`)
        return result
    }

    createProduct = async (file, data) => {
        const result = await this.createResource(`${this._apiBase}/product/`, file, data)
        return result
    }

    updateProduct = async (data) => {
        const result = await this.updateResource(`${this._apiBase}/product/`, data)
        return result
    }

    deleteProduct = async (id) => {
        const result = await this.deleteResource(`${this._apiBase}/product/${id}`)
        return result
    }

    _transformProduct = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? char.description : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default ProductService