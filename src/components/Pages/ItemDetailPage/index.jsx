import './styles.css'
import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import WishlistContext from '../../../context/wishlistContext';

export const ItemDetails = (props) => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const globalState = useContext(WishlistContext);

    useEffect( ()=> {
        const item = globalState.wishlistItems.find(
            (item) => item.id.stringValue === id
        );
        setItem(item);
    }, []);

    if(item) {
        return (
            <div className="item-details-page">
                <h1 className="item-name">{item.name.stringValue}</h1>
                <img src={item.image.stringValue}/>
            </div>
        )
    }
    else {
        return(
            <h1>You don't have an item on your wishlist with this id!</h1>
        )
    }

}