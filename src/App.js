import NavAppBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div>
      <CartProvider>

        <BrowserRouter>

          <NavAppBar/>
          
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/Productos/:Categoria' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path="/Nosotros" element={<Nosotros/>}/>
              <Route path="/Contacto" element={<Contacto/>}/>
              <Route path="/Cart" element={<Cart/>}/>
              <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>
            
        </BrowserRouter>

      </CartProvider>
      
    </div>
  );
}

export default App;