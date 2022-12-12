import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Styles/ItemDetail.css"
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import swal from 'sweetalert';


const ItemDetail = ({dato}) => {
  const [datoCount,setDatoCount] = useState(0);
  const {addToCart} = useContext(CartContext)
  
  const onAdd = (rate) => {
    swal({
      icon:"warning",
      text:"Tu has seleccionado " + rate + " productos.",
      buttons:"Confirmar"
    });
    setDatoCount(rate)
    addToCart(dato,rate)
  }

  return (
    <>
    { 
      dato && dato.Img
      ?
      <Card className="contenedorCard">
      <Card.Header><i>{dato.title}</i></Card.Header>
      <Card.Img variant="top" src={dato.Img} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>${dato.price}</b></ListGroup.Item>
        <ListGroup.Item>{dato.talles}</ListGroup.Item>
        <ListGroup.Item>{dato.stock} unidades en Stock</ListGroup.Item>
      </ListGroup>
      <br/>
        <Card.Text>
          {dato.description}
        </Card.Text>
      </Card.Body>
      {
        datoCount === 0
        ? <ItemCount stock={dato.stock} initial={datoCount} onAdd={onAdd}/>
        : <Link to="/cart" style={{textDecoration:"none"}}><Button variant="info">Terminar mi compra</Button></Link> 
      }
    </Card>
    : <p>Cargando....</p>
    }
    </>
  );
}

export default ItemDetail