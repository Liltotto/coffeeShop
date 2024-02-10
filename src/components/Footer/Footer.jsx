import { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';
import DiscountService from '../../services/DiscountService'
import './Footer.scss';

const Footer = () => {

    //СТЕЙТЫ ДЛЯ ПРОДУКТОВ
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

    //СТЕЙТЫ ДЛЯ СКИДОК

    const [inputDiscount, setInputDiscount] = useState('')

    const [searchResultDiscount, setSearchResultDiscount] = useState([])

    const [isEditOrDeleteAvaibleDiscount, setIsEditOrDeleteAvaibleDiscount] = useState(false)

    const [isAddDiscountAvaible, setIsAddDiscountAvaible] = useState(false)

    //const productService = new ProductService()
    const discountService = new DiscountService()

    const [discountFormData, setDiscountFormData] = useState({
        id: '',
        name: '',
        percent: 1,
        is_active: '',
    })

    //////////////////////////////////////////////////////////

    // ДЛЯ ПРОДУКТОВ

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
        const { name, price, is_available, presets, description } = productFormData
        if (
            name.length > 0
            && price > 0
            && is_available !== ''
            && presets.length > 0
            && description.length > 0
            && !isEditOrDeleteAvaible
        ) {
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

        const { id, ...rest } = productFormData
        const correctPresets = rest.presets.map((el) => (el + ' мл'))

        productService.createProduct({ ...rest, presets: correctPresets })
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
        productService.updateProduct({ ...productFormData, presets: correctPresets })
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

    /////////////////////////////////////////// ДЛЯ СКИДОК

    useEffect(() => {
        setSearchResultDiscount([])
        if (!inputDiscount) {
            return
        }
        discountService
            .getSearchedResult(10, inputDiscount)
            .then(res => {
                console.log(res);
                res.data.data && res.data.data.map(el => setSearchResultDiscount((prev) => [...prev, el]))
            })
            .catch(err => console.log(1)) //РАБЕРИСЬ ПОЧЕМУ НЕЛЬЗЯ ХУЙ ЗАБИТЬ НА ОШИБКУ
    }, [inputDiscount])

    useEffect(() => {
        const { id, name, percent, is_active } = discountFormData
        if (
            name.length > 0
            && percent > 0
            && is_active !== ''
        ) {
            setIsAddDiscountAvaible(true)
        }
        else {
            setIsAddDiscountAvaible(false)
        }
    }, [discountFormData])


    const clickSearchResHandlerDiscount = (id) => {

        console.log(id);
        discountService
            .getDiscount(id)
            .then((res) => {
                console.log(res);
                const data = res.data.data


                //console.log(presetsCopy);
                setDiscountFormData({
                    ...discountFormData,
                    id: data.id,
                    name: data.name,
                    percent: data.percent,
                    is_active: data.is_active,
                })

                setIsEditOrDeleteAvaibleDiscount(true)

                console.log(discountFormData.presets);
            })
    }

    const resetButtonHandlerDiscount = (e) => {
        e.preventDefault()
        setDiscountFormData({
            id: '',
            name: '',
            percent: 1,
            is_active: '',
        })
        //console.log(discountFormData);
        setIsEditOrDeleteAvaibleDiscount(false)
    }

    const addButtonHandlerDiscount = (e) => {
        e.preventDefault()

        const { id, ...rest } = discountFormData
        
        console.log(rest);
        discountService.createDiscount({ ...rest })
            .then(() => {
                setDiscountFormData({
                    id: '',
                    name: '',
                    percent: 1,
                    is_active: '',
                })

                console.log(rest);
            })
            .catch(err => console.log(err))
    }

    const editButtonHandlerDiscount = (e) => {
        e.preventDefault()
        console.log(discountFormData)
        //const correctPresets = productFormData.presets.map((el) => (el + ' мл'))
        discountService.updateDiscount({ ...discountFormData })
            .then((res) => {
                console.log(res);
                setDiscountFormData({
                    id: '',
                    name: '',
                    percent: 1,
                    is_active: '',
                })

                setIsEditOrDeleteAvaibleDiscount(false)

            })
            .catch(err => console.log(err))

    }

    const deleteButtonHandlerDiscount = (e) => {
        e.preventDefault()
        discountService.deleteDiscount(discountFormData.id)
            .then(() => {
                setDiscountFormData({
                    id: '',
                    name: '',
                    percent: 1,
                    is_active: '',
                })

                setIsEditOrDeleteAvaibleDiscount(false)

            })
    }

    return (
        <div className='footer'>

            {/* АДМИНКА РЕДАКТИРОВАНИЕ И ДОБАВЛЕНИЕ ПРОДУКТОВ */}

            <form action="" className='footer__form'>
                <div className="footer__form__product">
                    <input type="text" name='name' placeholder='Enter name' value={productFormData.name} onChange={(e) => { setProductFormData({ ...productFormData, name: e.target.value }) }} />
                    <input type="number" price='price' placeholder='Enter price' value={productFormData.price} onChange={(e) => setProductFormData({ ...productFormData, price: +e.target.value })} />
                    <div className="footer__form__product__available">

                        <div style={{ display: 'inline-block', marginRight: '10px' }}>Наличие</div>
                        <label htmlFor="yes">Да</label>
                        <input type="radio" name="available" id="yes" value={'yes'} checked={productFormData.is_available === true || productFormData.is_available === 'yes'} onChange={(e) => setProductFormData({ ...productFormData, is_available: e.target.value === 'yes' ? true : false })} />
                        <label htmlFor="no">Нет</label>
                        <input type="radio" name="available" id="no" value={'no'} checked={productFormData.is_available === false || productFormData.is_available === 'no'} onChange={(e) => { setProductFormData({ ...productFormData, is_available: e.target.value === 'no' ? false : true }) }} />

                    </div>
                    <input type="number" name='multiplier' placeholder='Enter multiplier' value={productFormData.multiplier} onChange={(e) => setProductFormData({ ...productFormData, multiplier: +e.target.value })} />
                    <input type="text" name='presets' placeholder='Enter presets' value={productFormData.presets.join(' ')} onChange={(e) => setProductFormData({ ...productFormData, presets: e.target.value.split(' ') })} />
                    <textarea name="description" id="description" cols="30" rows="5" placeholder='Enter description' value={productFormData.description} onChange={(e) => setProductFormData({ ...productFormData, description: e.target.value })}></textarea>

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
                </div>

            </form>

            {/* АДМИНКА РЕДАКТИРОВАНИЕ И ДОБАВЛЕНИЕ СКИДОК */}

            <form action="" className="footer_form_discount" style={{ marginTop: 30 }}>
                <div className="footer_form_discount_left">
                    <input type="text" name='name' placeholder='Enter name' value={discountFormData.name} onChange={(e) => { setDiscountFormData({ ...discountFormData, name: e.target.value }) }} />
                    <input type="number" name='percent' placeholder='Enter percent' value={discountFormData.percent} onChange={(e) => setDiscountFormData({ ...discountFormData, percent: +e.target.value })} />
                    <div className="footer__form__discount__active">

                        <div style={{ display: 'inline-block', marginRight: '10px' }}>Активна</div>
                        <label htmlFor="yes2">Да</label>
                        <input type="radio" name="active" id="yes2" value={'yes2'} checked={discountFormData.is_active === true || productFormData.is_active === 'yes2'} onChange={(e) => setDiscountFormData({ ...discountFormData, is_active: e.target.value === 'yes2' ? true : false })} />
                        <label htmlFor="no2">Нет</label>
                        <input type="radio" name="active" id="no2" value={'no2'} checked={discountFormData.is_active === false || discountFormData.is_active === 'no2'} onChange={(e) => { setDiscountFormData({ ...discountFormData, is_active: e.target.value === 'no2' ? false : true }) }} />

                    </div>
                </div>


                <div className="footer__form__editor">
                    <div className="searchAndRes">
                        <input
                            placeholder='Type to search...'
                            value={inputDiscount}
                            onChange={(e) => setInputDiscount(e.target.value)} />
                        <div className="searchResultList">
                            {
                                searchResultDiscount.map(el => <button style={{ display: 'block' }} key={el.id} onClick={(e) => {
                                    e.preventDefault()
                                    clickSearchResHandlerDiscount(el.id)
                                    setInputDiscount('')
                                }} >{el.name}</button>)
                            }
                        </div>
                    </div>
                    <button className='resetButton' onClick={resetButtonHandlerDiscount}>Очистить</button>

                    {isAddDiscountAvaible ? <button className='addButton' onClick={addButtonHandlerDiscount}>Добавить</button> : null}

                    {isEditOrDeleteAvaibleDiscount ?
                        <>
                            <button className='editButton' onClick={editButtonHandlerDiscount}>Редактировать</button>
                            <button className='deleteButton' onClick={deleteButtonHandlerDiscount}>Удалить</button>
                        </>
                        : null}
                </div>

            </form>
        </div>
    );
};

export default Footer;