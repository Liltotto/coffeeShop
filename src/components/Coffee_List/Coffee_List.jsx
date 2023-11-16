import { useEffect, useRef, useState } from 'react';

import CoffeeListItem from '@components/Coffee_List_Item/Coffee_List_Item';

import './Coffee_List.scss'



const CoffeeList = ({ coffeeListItem, handlerClickVolume, handlerClickHeart }) => {

    const coffeeListComponent = useRef(null);

    const [coffeeListHeight, setCoffeeListHeight] = useState(0);


    useEffect(() => {
        const coffeeListStyles = window.getComputedStyle(coffeeListComponent.current)
        setCoffeeListHeight(parseInt(coffeeListStyles.getPropertyValue("max-height")))
        console.log('max-height: ' + coffeeListHeight);
    }, [coffeeListHeight])
    
    const [hoveredList, setIsHoveredList] = useState([]); 
    
    const handlerHovered = (hoveredId) => {
        //console.log(hoveredId);
        setIsHoveredList([...hoveredList, hoveredId])
       // console.log(` ЭТО ${hoveredId}`);
       // console.log(hoveredList);
    }
   

    const coffeeListItem_secondHalf = coffeeListItem.map((item, index) => {
        //const isHovered = hovered === item.id
        //const isHovered = hovered === item.id
        //console.log(hoveredList);
        
        const isHovered = hoveredList.some((id) => {
            if (id===item.id) {
               // arr.splice(index, 1);
                return true
            }

            return false
        })
       // console.log(isHovered);
        
        const lastIndex = index === coffeeListItem.length - 1 ? true : false
        const { id, ...items } = item

        return <CoffeeListItem
            key={id}
            {...items}
            itemId={id}
            index={index}
            hovered={isHovered}
            handlerHovered={handlerHovered}
            handlerClickVolume={handlerClickVolume}
            handlerClickHeart={handlerClickHeart}
            coffeeListHeight={coffeeListHeight}
            forwardedRef={coffeeListComponent}
            lastIndex={lastIndex}
        />
        //надо обязательно добавить key потом!!!!!
    })

    return (
        <div className='coffeeList' ref={coffeeListComponent}>
            {coffeeListItem_secondHalf}
        </div>
    )
};

export default CoffeeList;