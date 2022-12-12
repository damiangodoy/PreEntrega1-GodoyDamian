import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import "./Styles/ItemDetailContainer.css"
import { useParams } from 'react-router-dom'
import {firestoreFetchOne} from "../utils/firestoreFetch";

const ItemDetailContainer = (props) => {
    const [dato,setDato] = useState({})
    const {IdItem} = useParams()

    //componentDidMount
    useEffect(() => {
        firestoreFetchOne(IdItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [IdItem]);

    return(
    <>
    <div>
    <h1 className='title_Container'><b><i>{props.greeting}</i></b></h1>
    </div>
    <ItemDetail dato={dato}/>
    </>
    )
}

export default ItemDetailContainer