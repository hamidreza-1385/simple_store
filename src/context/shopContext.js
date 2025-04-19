import { useState, createContext } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    const [createItem, setCreateItem] = useState([]);
    const addToCart = (itemId)=>{
        if(!createItem?.find((item)=> item.id === itemId))
        setCreateItem([...createItem, {id : itemId, count : 1}])
        else 
        setCreateItem(createItem.map((item)=>{
            if(item.id === itemId)
                return {...item, count : item.count + 1}
            else return item;
        }))
    }
    const rmToCart = (itemId)=>{
        setCreateItem(createItem.map((i)=>{
            if(i.id === itemId)
                return {...i, count: i.count ===0?0:i.count - 1}
            else return i;
        }))
    }
    const contextValue = { createItem, addToCart, rmToCart}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
