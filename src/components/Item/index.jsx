import { NavLink } from 'react-router-dom';
import './styles.css';
import { Button } from '../Button';

export const Item = (props) => {
    const {image, name, price, shortDescr, isOwned, id, link} = props;

    return (
        <div className="wishlist-item">
            <img className="item-image" src={image} alt={name}/>
            <div className="info">
                <NavLink to={`/wishlist-item/${id}`}>
                    <h1 className="item-name">{name}</h1>
                </NavLink>
                <p className="description">{shortDescr}</p>
                <p className="price">{price}</p>
            
            <Button text="Purchase" type="primary" isDisabled={isOwned} link={link}/>
            <Button text="Remove From List" type="tertiary" isDisabled={false}/>

            </div>
        </div>
    );
}