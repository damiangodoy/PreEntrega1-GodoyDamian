import { useEffect, useState } from 'react'
import Pic from '../Pic/carrito.png'

const CardWidget = () => {

  const [rate,setRate] = useState(0);

  const rateCard = () => {
    setRate (rate + 1)
  }

  useEffect (() =>{
    console.log("Se ha actulizado la app")
  }, [rate])

    return (
        <button type="button" class="btn btn-primary position-relative" onClick={rateCard}>
            <img className="img_carrito" src={Pic}></img>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {rate}
              <span class="visually-hidden">unread messages</span>
            </span><i class="bi bi-cart4"></i>
          </button>
    )
}

export default CardWidget