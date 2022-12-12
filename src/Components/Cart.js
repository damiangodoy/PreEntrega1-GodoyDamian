import { Link } from "react-router-dom";
import "./Styles/Cart.css";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';
import { collection, increment, serverTimestamp ,updateDoc} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig"
import swal from 'sweetalert';




const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
       let order = {
        buyer: {
            nombre:"Coder House",
            email:"coderHouse@gmail.com",
            celular:"123456789"
        },
        date: serverTimestamp(),
        items: test.CartList.map(dato=> ({
            id:dato.id,
            price:dato.price,
            title:dato.title,
            stock:dato.stock
        })),
        total:test.calcularSubtotal()
       }
       console.log(order)

       const creaOrderInFirestore = async () => {
        const newrderRef = doc(collection(db,"orders"));
        await setDoc(newrderRef,order);
        return newrderRef;
       }
       
       creaOrderInFirestore()
       .then(response => {
        swal({
            title:"Deseas confirmar la compra",
            text:"Order ID = " + response.id,
            icon:"warning",
            buttons:["No","Si"]
        }).then(respuesta => {
            if(respuesta){
                swal({text:"Tu compra fue confirmada con Exito!", icon:"success"})
            }
        })
        test.CartList.forEach(async(dato) => {
            const datoRef = doc(db,"productos",dato.id)
            await updateDoc(datoRef, {
                stock: increment(-dato.stock)
              });
        });
        // Borra el carrito de compras
        test.clear()
        })
       .catch(err => console.log(err))
    }

    return (
        <>
        <div className="contedor_Carrito">
        <h1 className="title_carrito"><b><i>Carrito</i></b></h1>
        </div>
        <div className="contendor-selectores">
            <div className="contenedor_Button">
            <Link to="/"><Button variant="info" className="Button_Contenedor"><b>Continuar comprando</b></Button></Link>
            </div>
            <Button variant="outline-danger" className="button_EP" onClick={test.clear}>Eliminar productos</Button>
        </div>
        <hr/>
        {
            test.CartList.length === 0 
            ?  <div className="contenedor_Mensaje">
            <Button variant="info" className="Carrito_Vacio">Tu carrito esta vacio</Button>
            </div>
        :  test.CartList.map(dato => 
            <Card key={dato.id} className="cardPadre">
            <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={dato.Img}
            />
            <Card.Body>
            <Card.Title><h4><i>{dato.title}</i></h4></Card.Title>
            <div className="DivContenedorTotal">
            <ListGroup className="list-group-flush">
                <ListGroup.Item><b>${dato.price*dato.stock}</b></ListGroup.Item>
                <ListGroup.Item><b>Stock:{dato.stock}</b></ListGroup.Item>
            </ListGroup>
            <Button variant="outline-danger" onClick={() => test.removeItem(dato.id)}>Borrar </Button>
            </div>
            </Card.Body>
            </Card>
            )
        }
        <div className="contenedor_Detalle">
        {
        test.CartList.length > 0 &&
        <Card className="cardPadre_Orden">
        <Card.Body>
        <Card.Title className="Titulo_orden"><h4><i>Orden</i></h4></Card.Title>
        <div className="DivContenedorTotal">
        <ListGroup className="list-group-flush">
            <ListGroup.Item><b>Total............${test.calcularSubtotal()}</b></ListGroup.Item>
        </ListGroup>
        <Button variant="outline-danger" className="button_comprar" onClick={createOrder}>Comprar</Button>
        </div>
        </Card.Body>
        </Card>
        }
        </div>
        </>
    );
}

export default Cart;