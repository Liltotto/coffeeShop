
import { useState } from 'react';

import UGandDot from '@assets/logo/UGandDot.png'


import './Header.scss'

const Header = () => {

    const [basketCount, setbasketCount] = useState(0)

    

    return (
        <div className='header'>
            
			<img src={UGandDot} alt="UGlogo" />

			{/* <div className="logo">
				<img src={UG} alt="UG" />
				<img src={dot} alt="dot" />
			</div>
             */}
            
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
            
            <div className="bottom_line"></div> 
        </div>
    );
};

export default Header;