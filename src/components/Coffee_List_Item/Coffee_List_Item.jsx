import { useState, useEffect, useRef, useContext } from 'react';
import GreenButton from '../UI/button/GreenButton';


//import heart from '@assets/icons/heart.svg';

import './Coffee_List_Item.scss';
import { AppWidth } from 'src/context/context';

const CoffeeListItem = ({ price, name, description, volumeButtons, activeHeart, handlerClickVolume, handlerClickHeart, itemId, handlerHovered, hovered, index, coffeeListHeight, forwardedRef, lastIndex, coffeeListItem }) => {

    // const [coffeeListItem_secondHalfData, setCoffeeListItem_secondHalfData] = useState([
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]},
    //     {price: 275, name: 'Песочный Карамель Американо', description: 'Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек', volumeButtons: [200, 400, 600]}, 
    // ]);

    // const {price, name, description, volumeButtons} = props.data

    //const [hovered, setIsHovered] = useState(-1); 

    // const height = hovered ? 'height: 539px' : 0;


    const thisCard = useRef(null);

    const { appWidth } = useContext(AppWidth);

    useEffect(() => {
        thisCard.current.style.left = `${((thisCard.current.offsetWidth + (appWidth - 4 * thisCard.current.offsetWidth) / 3)) * (index % 4)}px`;
        thisCard.current.style.top = `${(thisCard.current.offsetHeight + (coffeeListHeight - 3 * thisCard.current.offsetHeight) / 2) * Math.floor(index / 4)}px`

        if (lastIndex) forwardedRef.current.style.height = `${parseInt(thisCard.current.style.top) + thisCard.current.offsetHeight}px`


        console.log('AOE' + forwardedRef.current.style.height);

        //    console.log((thisCard.current.offsetHeight + (coffeeListHeight - 3*thisCard.current.offsetHeight)/2)*Math.floor(index/4));
        //    console.log("index:" + index);
        //    console.log(lastIndex);
        //     console.log('cl height' + forwardedRef.current.style.height);
        //     console.log(thisCard.current.offsetHeight);
        //     console.log(thisCard.current.style.top);

    }, [appWidth, index, coffeeListHeight, coffeeListItem])

    useEffect(() => {

        const coffeeListStyles = window.getComputedStyle(forwardedRef.current)

        console.log('awe');
        console.log(parseInt(forwardedRef.current.style.height));
        console.log(parseInt(coffeeListStyles.getPropertyValue("max-height")));

        if (parseInt(forwardedRef.current.style.height) >= parseInt(coffeeListStyles.getPropertyValue("max-height"))) {
            console.log('tyyyyyt');
            forwardedRef.current.style.maxHeight = forwardedRef.current.style.height
        }

        console.log('AOEwww' + forwardedRef.current.style.height);

    }, [coffeeListItem])


    const [hoverLeave, setHoverLeave] = useState(false);
    const [coffeeListItemClassfirst, setCoffeeListItemClassfirst] = useState('coffeeListItem');


    const localHandlerClickVolume = (volumeButton) => {
        handlerClickVolume(itemId, volumeButton.volume)
    }

    const handleMouseEnter = () => {
        //console.log('handleMouseEnter');
        handlerHovered(itemId);
        setHoverLeave(false)
        setCoffeeListItemClassfirst('coffeeListItem expanded')
        //console.log(hovered);
    };


    const handleMouseLeave = () => {
        setHoverLeave(true)
        setCoffeeListItemClassfirst('coffeeListItem')
        // setTimeout(() => {
        //     //handlerHovered(-1)
        // }, 1000)

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

    //const coffeeListItemClassfirst = hovered ? 'coffeeListItem expanded' : 'coffeeListItem'
    const innerClass = hoverLeave ? 'inner deleted' : 'inner'
    const coffeeListItemClasslast = hoverLeave ? coffeeListItemClassfirst + ' deleted' : coffeeListItemClassfirst
    return (
        <div
            className={coffeeListItemClasslast}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={thisCard}
        >
            <div className="coffeeListItem_firstHalf">
                {coffeeListItem_firstHalf_heart()}
            </div>

            <div className="coffeeListItem_secondHalf">
                {coffeeListItem_secondHalf(price, name, description, volumeButtons)}


                {hovered && (
                    <div className={innerClass}>
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