import React, {useState} from "react";
import {doc, deleteDoc} from 'firebase/firestore';

const WishlistContext = React.createContext({
    wishlistItems: [],
    initItems: () => {},
    removeItem: () => {}
})

export const WishlistContextProvider = (props) => {
    const [wishlistItems, setItems] = useState([]);

    const initItems = (apiData) => {
        setItems(apiData);
    }

    const removeItem = (itemID) => {
        const found = wishlistItems.findIndex( (item) => {
            return (item.id === itemID); 
        })
        if (found !== -1) {
            console.log("Deleted!")
        } else {
            console.log ("error delete");
        }
    }

    return (
        <WishlistContext.Provider
        value={{wishlistItems: wishlistItems, initItems: initItems, removeItem: removeItem}}>
            {props.children}
        </WishlistContext.Provider>
    )
}

export default WishlistContext;