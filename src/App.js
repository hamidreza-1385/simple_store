import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import MyNavbar from './components/nav';
import { ShopContextProvider } from './context/shopContext';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router basename='/simple_store'>
        <MyNavbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
