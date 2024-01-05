import { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';

import './Footer.scss';

const Footer = () => {

    const [input, setInput] = useState('')

    const [searchResult, setSearchResult] = useState([])

    const [isEditOrDeleteAvaible, setIsEditOrDeleteAvaible] = useState(false)

    const [isAddProductAvaible, setIsAddProductAvaible] = useState(false)

    const productService = new ProductService()

    const [productFormData, setProductFormData] = useState({
        id: '',
        name: '',
        price: 1,
        is_available: '',
        multiplier: 1,
        presets: [],
        description: '',
    })

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
                .catch(err => console.log(1)) //РАБЕРИСЬ ПОЧЕМУ НЕЛЬЗЯ ХУЙ ЗАБИТЬ НА ОШИБКУ
    }, [input])

    useEffect(() => {
        const {name, price, is_available, presets, description} = productFormData
        if(
            name.length > 0
            && price > 0
            && is_available != ''
            && presets.length > 0
            && description.length > 0
            && !isEditOrDeleteAvaible
        ){
            setIsAddProductAvaible(true)
        }
        else {
            setIsAddProductAvaible(false)
        }
    }, [productFormData])

    // useEffect(() => {
    //     const a = 'aaaaaa'
    //     console.log(a);
    //     const copy = name.slice(0)
    //     copy.push(a)
    //     //console.log(res)
    //     setName((prev) => [...prev, copy])

    // }, [])

    const clickSearchResHandler = (id) => {

        console.log(id);
        productService
            .getProduct(id)
            .then((res) => {
                console.log(res);
                const data = res.data.data
               
                const presetsCopy = data.presets.map((element) => {
                    return parseInt(element)
                })

                //console.log(presetsCopy);
                setProductFormData({
                    ...productFormData,
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    is_available: data.is_available,
                    multiplier: data.multiplier,
                    presets: presetsCopy,
                    description: data.description,
                })

                setIsEditOrDeleteAvaible(true)

                console.log(productFormData.presets);
            })
    }

    const resetButtonHandler = (e) => {
        e.preventDefault()
        setProductFormData({
            id: '',
            name: '',
            price: 1,
            is_available: '',
            multiplier: 1,
            presets: [],
            description: '',
        })
        setIsEditOrDeleteAvaible(false)
    }

    const addButtonHandler = (e) => {
        e.preventDefault()
        
        const {id, ...rest} = productFormData
        const correctPresets = rest.presets.map((el) => (el + ' мл'))
        
        productService.createProduct({...rest, is_available: true, presets: correctPresets})
            .then(() => {
                setProductFormData({
                    id: '',
                    name: '',
                    price: 1,
                    is_available: '',
                    multiplier: 1,
                    presets: [],
                    description: '',
                })

                console.log(rest);
            })
            .catch(err => console.log(err))
    }

    const editButtonHandler = (e) => {
        e.preventDefault()
        console.log(productFormData)
        const correctPresets = productFormData.presets.map((el) => (el + ' мл'))
        productService.updateProduct({...productFormData, presets: correctPresets})
            .then((res) => {
                console.log(res);
                setProductFormData({
                    id: '',
                    name: '',
                    price: 1,
                    is_available: '',
                    multiplier: 1,
                    presets: [],
                    description: '',
                })

                setIsEditOrDeleteAvaible(false)
            })
            .catch(err => console.log(err))

    }

    const deleteButtonHandler = (e) => {
        e.preventDefault()
        productService.deleteProduct(productFormData.id)
            .then(() => {
                setProductFormData({
                    id: '',
                    name: '',
                    price: 1,
                    is_available: '',
                    multiplier: 1,
                    presets: [],
                    description: '',
                })

                setIsEditOrDeleteAvaible(false)
            })
    }

    return (
        <div className='footer'>
            <form action="" className='footer__form'>
                <div className="footer__form__product">
                    <input type="text" name='name' placeholder='Enter name' value={productFormData.name} onChange={(e) => { setProductFormData({ ...productFormData, name: e.target.value }) }} />
                    <input type="number" price='price' placeholder='Enter price' value={productFormData.price} onChange={(e) => setProductFormData({ ...productFormData, price: +e.target.value })} />
                    <div className="footer__form__product__available">
                        {/* <label htmlFor="available">Наличие</label> */}
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>Наличие</div>
                        <label htmlFor="yes">Да</label>
                        <input type="radio" name="available" id="yes" value={'yes'} checked={productFormData.is_available ===  true || productFormData.is_available === 'yes'} onChange={(e) => setProductFormData({ ...productFormData, is_available: e.target.value === 'yes' ? true : false })} />
                        <label htmlFor="no">Нет</label>
                        <input type="radio" name="available" id="no" value={'no'} checked={productFormData.is_available === false || productFormData.is_available === 'no'} onChange={(e) => { setProductFormData({ ...productFormData, is_available: e.target.value === 'no' ? false : true })}} />

                    </div>
                    <input type="number" name='multiplier' placeholder='Enter multiplier' value={productFormData.multiplier} onChange={(e) => setProductFormData({ ...productFormData, multiplier: +e.target.value })} />
                    <input type="text" name='presets' placeholder='Enter presets' value={productFormData.presets.join(' ')} onChange={(e) => setProductFormData({ ...productFormData, presets: e.target.value.split(' ') })} />
                    <textarea name="description" id="description" cols="30" rows="5" placeholder='Enter description' value={productFormData.description} onChange={(e) => setProductFormData({ ...productFormData, description: e.target.value })}></textarea>
                    {/* <input type="text" placeholder='Enter description' /> */}
                </div>

                <div className="footer__form__editor">
                    <div className="searchAndRes">
                        <input
                            placeholder='Type to search...'
                            value={input}
                            onChange={(e) => setInput(e.target.value)} />
                        <div className="searchResultList">
                            {
                                searchResult.map(el => <button style={{ display: 'block' }} key={el.id} onClick={(e) => {
                                    e.preventDefault()
                                    clickSearchResHandler(el.id)
                                    setInput('')
                                }} >{el.name}</button>)
                            }
                        </div>
                    </div>
                    <button className='resetButton' onClick={resetButtonHandler}>Очистить</button>

                    {isAddProductAvaible ? <button className='addButton' onClick={addButtonHandler}>Добавить</button> : null}

                    {isEditOrDeleteAvaible ?
                        <>
                            <button className='editButton' onClick={editButtonHandler}>Редактировать</button>
                            <button className='deleteButton' onClick={deleteButtonHandler}>Удалить</button>
                        </>
                        : null}
                    { }
                </div>

            </form>

        </div>
    );
};

export default Footer;