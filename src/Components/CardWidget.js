import Pic from '../Pic/carrito.png'
import {Link} from "react-router-dom"
import { CartContext } from './CartContext';
import { useContext} from 'react';

const CardWidget = () => {
const test = useContext(CartContext);

return (
  <>
  <Link to="/cart">
    <button type="button" className="btn btn-primary position-relative">
      <img className="img_carrito" src={Pic}></img>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {test.calcularStock()}
        <span className="visually-hidden">unread messages</span>
      </span><i className="bi bi-cart4"></i>
    </button>
  </Link>
  </>
  )
}

export default CardWidget