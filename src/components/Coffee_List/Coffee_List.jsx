import CoffeeListItem from '../Coffee_List_Item/Coffee_List_Item';

import './Coffee_List.scss'

const CoffeeList = () => {
    return (
        <div className='coffeeList'>
            <CoffeeListItem/>
            <CoffeeListItem/>
            <CoffeeListItem/>
            <CoffeeListItem/>
        </div>
    );
};

export default CoffeeList;