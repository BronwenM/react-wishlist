import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from "../src/components/Navbar";
import { HomePage } from './components/Pages/HomePage';
import { ItemDetails } from './components/Pages/ItemDetailPage';
import { AddItemPage } from './components/Pages/AddItemPage';

//components

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/wishlist-items/:id" element={<ItemDetails/>}/>
        <Route path="/wishlist-items/add" element={<AddItemPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
