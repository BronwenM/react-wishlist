import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from "../src/components/Navbar";
import { HomePage } from './components/Pages/HomePage';
import { ItemDetails } from './components/Pages/ItemDetailPage';

//components

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<h1>This is the home page</h1>}></Route>
        <Route path="/wishlist-items/:id" element={<ItemDetails/>}></Route>
        <Route path="/wishlist-items/add" element={<h1>This is the home page</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
