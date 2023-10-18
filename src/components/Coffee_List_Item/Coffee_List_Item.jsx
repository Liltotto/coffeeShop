import './Coffee_List_Item.scss';

const CoffeeListItem = () => {
    return (
        <div className='coffeeListItem'>
            <div className="coffeeListItem_firstHalf">
                <button className="heart">
                    <img className="heartIcon" src="assets/icons/heart.svg" alt="heart" />
                </button>
            </div>

            <div className="coffeeListItem_secondHalf">
                <div className="price">275 ₽</div>
                <div className="name">Песочный Карамель Американо</div>
                <div className="description">Двойной американо с добавлением карамельного сиропа, взбитые сливки, посыпка соленых карамельных крошек</div>
                <div className="volumeButtonsWrapper">
                    <button className="volumeButton">200 мл</button>
                    <button className="volumeButton">400 мл</button>
                    <button className="volumeButton">600 мл</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeListItem;