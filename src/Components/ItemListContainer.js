import {useEffect, useState} from 'react'
import {data} from '../utils/data'
import {customFetch} from '../utils/customFetch'
import ItemList from "./ItemList"
import "./Styles/ItemListContainer.css"
import Item from './Item'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [datos,setDatos] = useState([])
    const {IdCategory} = useParams()

    //componentDidUpodate
    useEffect(() => {
        if(IdCategory == undefined){
            customFetch(2000,data)
            .then(response => setDatos(response))
            .catch(err => console.log(err))  
        }else {
            customFetch(2000,data.filter(Item => Item.category === Number(IdCategory) ))
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        }

    },[IdCategory])
    
    return(
    <>
    <div className='title_Container'>
    <h1><b><i>{props.greeting}</i></b></h1>
    </div>
    <ItemList datos={datos}/>
    </>
    )
}

export default ItemListContainer