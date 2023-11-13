import { useState } from 'react';
import GreenButton from '../UI/button/GreenButton';


//import heart from '@assets/icons/heart.svg';

import './Coffee_List_Item.scss';

const CoffeeListItem = ({ price, name, description, volumeButtons, activeHeart, handlerClickVolume, handlerClickHeart, itemId, handlerHovered, hovered }) => {

    // const [coffeeListItem_secondHalfData, setCoffeeListItem_secondHalfData] = useState([
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]}, 
    // ]);

    // const {price, name, description, volumeButtons} = props.data

    //const [hovered, setIsHovered] = useState(-1); 

   // const height = hovered ? 'height: 539px' : 0;

    const localHandlerClickVolume = (volumeButton) => {
        handlerClickVolume(itemId, volumeButton.volume)
    }

    const handleMouseEnter = () => {
        //console.log('handleMouseEnter');
        handlerHovered(itemId);
        console.log(hovered);
    };

    const handleMouseLeave = () => {
        handlerHovered(-1)
    };

    const localHandlerClickHeart = () => {
        handlerClickHeart(itemId)
    }

    const coffeeListItem_firstHalf_heart = () => {

        const classHeartIcon = activeHeart ? 'heartIcon active' : 'heartIcon'

        return (
            <button
                type="button"
                className="heart"
                onClick={() => localHandlerClickHeart(itemId)}
            >
                <div className={classHeartIcon}></div>
            </button>
        )

    }

    const coffeeListItem_secondHalf = (price, name, description, volumeButtons) => {

        const volumeButtonsArr = volumeButtons.map((item) => {

            const classVolumeButton = item.active ? 'volumeButton active' : 'volumeButton'
            return <button
                type="button"
                key={item.volume}
                className={classVolumeButton}
                onClick={() => localHandlerClickVolume(item)}
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

    const coffeeListItemClass = hovered ? 'coffeeListItem expanded' : 'coffeeListItem'

    return (
        <div 
            className={coffeeListItemClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <div className="coffeeListItem_firstHalf">
                {coffeeListItem_firstHalf_heart()}
            </div>

            <div className="coffeeListItem_secondHalf">
                {coffeeListItem_secondHalf(price, name, description, volumeButtons)}


                { hovered && (
                    <div className={hovered ? 'inner active' : 'inner'}>
                        <GreenButton>
                            Купить
                        </GreenButton>

                        <button
                            type="button"
                            className="basket"
                            //onClick={() => localHandlerClickHeart(itemId)}
                        >
                            <div className="basket_icon"></div>
                        </button>
                    </div>)
                }

            </div>
        </div>        
    );
};

export default CoffeeListItem;