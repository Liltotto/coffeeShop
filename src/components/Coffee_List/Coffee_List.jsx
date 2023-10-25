import CoffeeListItem from '@components/Coffee_List_Item/Coffee_List_Item';

import './Coffee_List.scss'

const CoffeeList = ({coffeeListItem_secondHalfData}) => {



    const coffeeListItem_secondHalf = coffeeListItem_secondHalfData.map(item => {
        return <CoffeeListItem 
        //надо обязательно добавить key потом!!!!!
                    data={item}
                />
                
    })

    
    return (
        <div className='coffeeList'>
            {coffeeListItem_secondHalf}
        </div>
    );
};

export default CoffeeList;