import axios from "axios"



class AuthService {
    _apiBase = 'http://localhost:8080/user'
    _aniKey = 'apikey=d60518144fc19c1f256d76330f8ac48c'

    

    _baseOffset = 210

  
    postResource = async (url, data) => {
        const res = await axios.post(
            url,
            data,
            )
        return res
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

    signUp = async (registerData) => {
        const result = await this.postResource(`${this._apiBase}/register`, registerData)        
        return result
    }

    signIn = async (loginData) => {
        const result = await this.postResource(`${this._apiBase}/login`, loginData)        
        return result
    }

    _transformProduct = (char) => {
        return{
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

export default AuthService;