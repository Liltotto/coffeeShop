import CoffeeList from '../Coffee_List/Coffee_List';

import './Menu.scss';

const Menu = () => {

    
    return (
        <div className='menu'>
            <h1>Меню</h1>
            <div className="sortingCoffee">
                <div className="sortingCoffee_firstHalf">Сортировать по:</div>

                <div className="sortingCoffee_items">
                    <button className="sortingCoffee_item">Новизне</button>
                    <button className="sortingCoffee_item">Убыванию цены</button>
                    <button className="sortingCoffee_item">Возрастанию цены</button>

                    {/* !!!! !!!! оптимизировать потом надо это как на курсе */}
                </div>
            </div>
            
            <CoffeeList/>
            
        </div>
    );
};

export default Menu;