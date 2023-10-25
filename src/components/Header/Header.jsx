
import { useState } from 'react';

import UG from '@assets/logo/UG.svg'

import './Header.scss'

const Header = () => {

    const [basketCount, setbasketCount] = useState(0)

    

    return (
        <div className='header'>
            <img src={UG} alt="UG" />
            
            {/* <div className="heartAndBasket">
                <div className="heart">
                    <img src="assets/icons/heart.svg" alt="heart" />
                </div> */}
            <input className="searchInput" type="text" placeholder='Поиск'/>

            <button className="basketButton">
                <div className="basket_icon"></div>
                <div className="basket_text">Корзина</div>
                |
                <div>{basketCount}</div>
            </button>
            
        </div>
    );
};

export default Header;