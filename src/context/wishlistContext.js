import React, {useState} from "react";

const WishlistContext = React.createContext({
    wishlistItems: [],
    initItems: () => {}
})

export const WishlistContextProvider = (props) => {
    const [wishlistItems, setItems] = useState([]);

    const initItems = (apiData) => {
        setItems(apiData);
    }

    return (
        <WishlistContext.Provider
        value={{wishlistItems: wishlistItems, initItems: initItems}}>
            {props.children}
        </WishlistContext.Provider>
    )
}

export default WishlistContext;