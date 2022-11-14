import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "./Styles/Item.css"
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


const Item = (props,id) => {
   
return (
    <>
    <Card className="cardPadre">
    <Card.Img variant="top" src={props.Img}/>
    <Card.Body>
    <Card.Title><h4><i>{props.title}</i></h4></Card.Title>
    <div className="DivContenedorTotal">
    <ListGroup className="list-group-flush">
        <ListGroup.Item><b>${props.price}</b></ListGroup.Item>
        <ListGroup.Item>{props.talles}</ListGroup.Item>
        <Link to={`/item/${props.id}`}><Button variant="outline-secondary" className="Button_Detalle">Detalle</Button></Link>
      </ListGroup>
    </div>
    <ItemCount/>
    </Card.Body>
    </Card>
    </>
   )
}

export default Item