import '../src/Components/Styles/App.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Cart from './Components/Cart'
import CartContextProvider  from './Components/CartContext'




const App = () => {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar ItemList="Hombre" ItemList2= "Mujer" ItemList3= "Verano"/>
    <Routes>
      <Route path='/'element={<ItemListContainer greeting="Productos"/>}/>
      <Route path='/category/:IdCategory' element={<ItemListContainer greeting="Productos"/>}/>
      <Route path='/item/:IdItem' element={<ItemDetailContainer greeting="Producto"/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App;