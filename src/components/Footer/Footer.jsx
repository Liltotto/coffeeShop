import { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';

import './Footer.scss';

const Footer = () => {

    const [input, setInput] = useState('')

    const [searchResult, setSearchResult] = useState([])

    const productService = new ProductService()

    

    useEffect(() => {
        setSearchResult([])
        if (!input) {
            return
        }
        productService
            .getSearchedResult(10, input)
            .then(res => {
                // const copy = name.slice(0)
                // copy.push(res.data.data.name)
                //console.log(res)
                //setName((prev) => [...prev, copy])
                
                //res.data.data && res.data.data.map(el => console.log(el.name))

                res.data.data && res.data.data.map(el => setSearchResult((prev) => [...prev, el])) 
                
            })
            .catch(err => console.log(1))
    }, [input])

    // useEffect(() => {
    //     const a = 'aaaaaa'
    //     console.log(a);
    //     const copy = name.slice(0)
    //     copy.push(a)
    //     //console.log(res)
    //     setName((prev) => [...prev, copy])

    // }, [])



    return (
        <div className='footer'>
            <input
                placeholder='Type to search...'
                value={input}
                onChange={(e)=>setInput(e.target.value)} />
            <div className="searchResultList">
                {
                    searchResult.map(el => <div key={el.id}>{el.name}</div>)
                }
            </div>
        </div>
    );
};

export default Footer;