import { useState } from 'react';


import heart from '@assets/icons/heart.svg';

import './Coffee_List_Item.scss';

const CoffeeListItem = ({price, name, description, volumeButtons, handlerClickVolume, itemId}) => {

    // const [coffeeListItem_secondHalfData, setCoffeeListItem_secondHalfData] = useState([
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]}, 
    // ]);

    // const {price, name, description, volumeButtons} = props.data

    const handlerClick = (volumeButton) => {
        handlerClickVolume(itemId, volumeButton.volume)
    }

    const coffeeListItem_secondHalf = (price, name, description, volumeButtons) => {

        const volumeButtonsArr = volumeButtons.map((item) => {

            const classVolumeButton = item.active ? 'volumeButton active' : 'volumeButton'
            console.log(classVolumeButton);
            console.log(item.active);
            return  <button 
                        type="button"
                        key={item.volume} 
                        className={classVolumeButton}
                        onClick={() => handlerClick(item)}
                        >
                            {item.volume} мл
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