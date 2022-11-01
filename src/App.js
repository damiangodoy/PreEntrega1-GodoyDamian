import './App.css'
import Body from './Components/Body'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'



const App = () => {
  return(
    <>
    <NavBar ItemList="Interior" ItemList2= "Exterior" ItemList3= "Contacto"/> 
    <Body/>
    <ItemListContainer greeting="Copyright © Damian Godoy"/>
    </>
  )
}

export default App;
