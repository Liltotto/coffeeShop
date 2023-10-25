import { useState } from 'react';
import CoffeeList from '../Coffee_List/Coffee_List';

import './Menu.scss';

const Menu = () => {

    const [buttonsSortingCoffeeData, setButtonsSortingCoffeeData] = useState([
        {name: 'newestFirst', lable: 'Новизне', active: false},
        {name: 'toCheapest', lable: 'Убыванию цены', active: false},
        {name: 'toExpensive', lable: 'Возрастанию цены', active: false}    
    ])
    
    // const [coffeeListItem_secondHalfData, setCoffeeListItem_secondHalfData] = useState([
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]}, 
    // ]);

    const coffeeListItem_secondHalfData = [
        {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
        {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
        {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
        {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]}, 
    ]

    const handlerChange = (name) => {
        setButtonsSortingCoffeeData(buttonsSortingCoffeeData.map((item) => {
            if (item.name === name) {
                return item.active ? {...item, active: false} : {...item, active: true}
            }
            return {...item, active: false}
        }))
    }


    const buttonsSortingCoffee = buttonsSortingCoffeeData.map(({name, lable, active}) => {

        const classSortingCoffee_item = active ? 'sortingCoffee_item active' : 'sortingCoffee_item'

        return <button  type = "button" 
                        className={classSortingCoffee_item}
                        key={name}
                        onClick={() => handlerChange(name)}>
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
            
            <CoffeeList coffeeListItem_secondHalfData={coffeeListItem_secondHalfData}/>
            
        </div>
    );
};

export default Menu;