import {useEffect, useState} from 'react'
import {data} from '../utils/data'
import {customFetch} from '../utils/customFetch'
import ItemDetail from './ItemDetail'
import "./Styles/ItemDetailContainer.css"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = (props) => {
    const [dato,setDato] = useState({})
    const {IdItem} = useParams()

    //componentDidMount
    useEffect(() => {
        customFetch(2000,data)
        .then(response => setDato(response.find((item)=> item.id === Number(IdItem))))
        .catch(err => console.log(err))
    },[IdItem])
    
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