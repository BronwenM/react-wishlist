import { Item } from '../../Item';
import './styles.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export const HomePage = () => {

    const [items, setItems] = useState([]);

    const getItems = async() => {
        try{
            const response = await fetch("https://firestore.googleapis.com/v1/projects/react-wishlist-7f868/databases/(default)/documents/wishlist/");
            const data = await response.json();
            console.log(data);
            
            const formattedData = data.documents.map( (item) => {
                return item.fields;
            });

            console.log(formattedData);

            setItems(formattedData);

        }catch(error){
            console.log(error);
        }
    }

    useEffect(
        () => {
          getItems();
        }, []
      )

    return (
        <div className="home-page">
            <Item name="Wilbur" image="https://upload.wikimedia.org/wikipedia/commons/0/0e/Wilbur_Soot_2020.jpg" price="$69.420" shortDescr="Wilbur Soot is a musician and minecraft twitch streamer." isOwned={false} id={12} link="https://www.google.ca/"/>
            <h1 className="wishlist-items">My Wishlist</h1>
            <div className="items-list">
                {
                    items.map( (item) => <Item image={item.image.stringValue} name={item.name.stringValue} price={item.price.stringValue} shortDescr={item.shortDesc.stringValue} isOwned={item.isOwned.booleanValue} id={item.id.stringValue} link={item.link.stringValue} />)
                }
            </div>
        </div>
    );
}