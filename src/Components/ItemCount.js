import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./Styles/ItemCount.css"


const ItemCount = ({stock = 0,initial = 1,onAdd}) => {
    const [rate,setRate] = useState(0);

    const rateProducto = () => {
      if(rate >= stock){
      alert("No hay mas stock")
      } else{
        setRate(rate + 1)
      }
    }
    
    const restProducto = () => {
      if(rate <= initial + 1){
       alert("Error, no se pueden elegir 0 prendas") 
      }else{
        setRate(rate - 1)
      }
    }

    

return (
    <>
    <div className='contenedorCount'>
    <span>Cantidad: {rate} </span> 
    <br></br> 
    <Button className='Button_mas' variant="outline-dark" onClick={rateProducto}>+</Button> | <Button className='Button_menos' variant="outline-dark" onClick={restProducto}>-</Button>
    {
      stock && rate
      ? <Button variant="info" onClick={() => onAdd(rate)}>Agregar al Carrito</Button>
      : <Button variant="info">Agregar al Carrito</Button>
    }
    </div>    
    </>
  );
}

export default ItemCount;