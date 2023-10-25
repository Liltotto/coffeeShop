import CoffeeListItem from '@components/Coffee_List_Item/Coffee_List_Item';

import './Coffee_List.scss'

const CoffeeList = ({coffeeListItem_secondHalfData, handlerClickVolume}) => {



    const coffeeListItem_secondHalf = coffeeListItem_secondHalfData.map(item => {

        const {id, ...items} = item

        return <CoffeeListItem 
                    key={id}
                    {...items}
                    itemId={id}
                    handlerClickVolume={handlerClickVolume}
                />
        //надо обязательно добавить key потом!!!!!
    })

    return (
        <div className='coffeeList'>
            {coffeeListItem_secondHalf}
        </div>
)
};

export default CoffeeList;