import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./Styles/ItemCount.css"


const ItemCount = () => {
    const [rate,setRate] = useState(0);
    const stockMaximo = 10;
    const stockMinimo = 0;
    
    const rateProducto = () => {
      if(rate >= stockMaximo){
      alert("No hay mas stock")
      } else{
        setRate(rate + 1)
      }
    }
    
    const restProducto = () => {
      if(rate <= stockMinimo){
       alert("Error,seleccione al menos 1 prenda") 
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
    <Button className='Button_Count' variant="info">Agregar al carrito</Button>
    </div>    
    </>
  );
}

export default ItemCount;