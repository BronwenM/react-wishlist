import './styles.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            
            <ul className="navbar-links">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">Wishlist</NavLink>    
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/wishlist-items/add">Add an Item</NavLink>
                </li>
            </ul>
        </nav>
    );
}