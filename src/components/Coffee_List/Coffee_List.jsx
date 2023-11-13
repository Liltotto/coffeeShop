import { useState } from 'react';

import CoffeeListItem from '@components/Coffee_List_Item/Coffee_List_Item';

import './Coffee_List.scss'

const CoffeeList = ({ coffeeListItem, handlerClickVolume, handlerClickHeart }) => {

    const [hovered, setIsHovered] = useState(-1); 
    
    const handlerHovered = (hoveredId) => {
        setIsHovered(hoveredId)
       // console.log(` ЭТО ${hoveredId}`);
    }
   

    const coffeeListItem_secondHalf = coffeeListItem.map(item => {
        //const isHovered = hovered === item.id
        const isHovered = hovered === item.id
        //console.log(isHovered, hovered, item.id);
        
        const { id, ...items } = item

        return <CoffeeListItem
            key={id}
            {...items}
            itemId={id}
            hovered={isHovered}
            handlerHovered={handlerHovered}
            handlerClickVolume={handlerClickVolume}
            handlerClickHeart={handlerClickHeart}
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