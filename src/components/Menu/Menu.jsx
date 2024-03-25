import { useEffect, useState } from 'react';
import CoffeeList from '../Coffee_List/Coffee_List';

import './Menu.scss';

const Menu = () => {



    const [buttonsSortingCoffeeData, setButtonsSortingCoffeeData] = useState([
        { name: 'newestFirst', lable: 'Новизне', active: false },
        { name: 'toCheapest', lable: 'Убыванию цены', active: false },
        { name: 'toExpensive', lable: 'Возрастанию цены', active: false }
    ])

    // const [coffeeListItem_secondHalfData, setCoffeeListItem_secondHalfData] = useState([
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]}, 
    // ]);

    const [coffeeListItem, setCoffeeListItem] = useState([
        { price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 18, 28), id: 1 },
        { price: 2, name: 'Песочный Карамель', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 5, 28), id: 2 },
        { price: 27, name: 'Песочный', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 2, 28), id: 3 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 4 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 5 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 6 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 7 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 8 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 9 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 10 },
        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 11 },

        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 12 },

        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 13 },

        { price: 11, name: 'Песоч', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [{ volume: 200, active: false }, { volume: 400, active: false }, { volume: 600, active: false }], activeHeart: false, date: new Date(2016, 4, 28), id: 14 },

    ])

    const [displayedCoffeeList, setDisplayedCoffeeList] = useState([])

    const [isShowAll, setIsShowAll] = useState(false)

    useEffect(() => {
        if(coffeeListItem.length > 12){
            setDisplayedCoffeeList(coffeeListItem.slice(0, 12))
        } else {
            setDisplayedCoffeeList(coffeeListItem)
        }
    }, [])

    useEffect(() => {
        if(isShowAll) {
            setDisplayedCoffeeList(coffeeListItem)
        } else {
            setDisplayedCoffeeList(coffeeListItem.slice(0, 12))
        }
    }, [coffeeListItem])

    const handlerClickFilter = (name) => {
        setButtonsSortingCoffeeData(buttonsSortingCoffeeData.map((item) => {
            if (item.name === name) {
                if (!item.active) {
                    switch (name) {
                        case 'newestFirst':
                            coffeeListItem.sort((a, b) => b.date - a.date)
                            break
                        case 'toCheapest':
                            coffeeListItem.sort((a, b) => b.price - a.price)
                            break
                        case 'toExpensive':
                            coffeeListItem.sort((a, b) => a.price - b.price)
                            break
                        default:
                            break
                    }
                    return { ...item, active: true }
                }
                coffeeListItem.sort((a, b) => a.id - b.id)
            }

            return { ...item, active: false }
        }))
    }

    const handlerClickHeart = (id) => {
        console.log('jojoj ' + id);
        setCoffeeListItem(coffeeListItem.map((item) => {
            if (item.id === id) {
                return { ...item, activeHeart: !item.activeHeart }
            }
            return item
        }))
    }

    const handlerClickVolume = (id, volume) => {
        setCoffeeListItem(coffeeListItem.map((item) => {
            if (item.id === id) {
                item.volumeButtons.map((subItem) => {
                    if (subItem.volume === volume) {
                        if (subItem.active) {
                            subItem.active = false
                            return { ...item, subItem }
                        }
                        subItem.active = true
                        return { ...item, subItem }
                        //return subItem.active ? {...subItem, active: false} : {...subItem, active: true}
                    }
                    subItem.active = false
                    return { ...item, subItem }
                })

            }
            return item
        }))
    }

    const buttonsSortingCoffee = buttonsSortingCoffeeData.map(({ name, lable, active }) => {

        const classSortingCoffee_item = active ? 'sortingCoffee_item active' : 'sortingCoffee_item'

        return <button type="button"
            className={classSortingCoffee_item}
            key={name}
            onClick={() => handlerClickFilter(name)}>
            {lable}
        </button>
    })

    return (
        <div className='menu'>
            <h1>Меню</h1>
            <div className="sortingCoffee">
                <div className="sortingCoffee_firstHalf">Сортировать по:</div>

                <div className="sortingCoffee_items">
                    {buttonsSortingCoffee}
                    {/* <button className="sortingCoffee_item">Новизне</button>
                    <button className="sortingCoffee_item">Убыванию цены</button>
                    <button className="sortingCoffee_item">Возрастанию цены</button> */}

                    {/* !!!! !!!! оптимизировать потом надо это как на курсе */}
                </div>
            </div>

            <CoffeeList
                coffeeListItem={displayedCoffeeList}
                handlerClickVolume={handlerClickVolume}
                handlerClickHeart={handlerClickHeart}
            />

            <button onClick={
                () => {
                    
                    if(displayedCoffeeList.length === coffeeListItem.length){
                        setDisplayedCoffeeList(coffeeListItem.slice(0, 12))
                        setIsShowAll(false)
                        return
                    }
                    setDisplayedCoffeeList(coffeeListItem)
                    setIsShowAll(true)
                    
                    //ТУТ СДЕЛАТЬ ТАК ЧТОБЫ ОНА ИСЧЕЗАЛА ЛИБО МЕНЯЛА ЗНАЧЕНИЕ ВНУТРИ И СПУСКАЛАСЬ ПЛАВНО ВНИЗ
                }
            }>Показать все</button>

        </div>
    );
};

export default Menu;