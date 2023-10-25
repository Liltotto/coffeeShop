import { useState } from 'react';


import heart from '@assets/icons/heart.svg';

import './Coffee_List_Item.scss';

const CoffeeListItem = (props) => {

    // const [coffeeListItem_secondHalfData, setCoffeeListItem_secondHalfData] = useState([
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]}, 
    // ]);

    const {price, name, description, volumeButtons} = props.data

    

    const coffeeListItem_secondHalf = (price, name, description, volumeButtons) => {

        const volumeButtonsArr = volumeButtons.map((item) => {
            return  <button className="volumeButton">
                        {item} мл
                    </button>
        })

        return (
            <>
                <div className="price">{price} ₽</div>
                <div className="name">{name}</div>
                <div className="description">{description}</div>
                <div className="volumeButtonsWrapper">
                    {volumeButtonsArr}
                    {/* <button className="volumeButton active">{}</button>
                    <button className="volumeButton">400 мл</button>
                    <button className="volumeButton">600 мл</button> */}
                </div>
            </>
        )
    }

    return (
        <div className='coffeeListItem'>
            <div className="coffeeListItem_firstHalf">
                <button className="heart">
                    <img className="heartIcon" src={heart} alt="heart" />
                </button>
            </div>

            <div className="coffeeListItem_secondHalf">
                {coffeeListItem_secondHalf(price, name, description, volumeButtons)}
            </div>
        </div>
    );
};

export default CoffeeListItem;