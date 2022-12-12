import {useEffect, useState} from 'react'
import ItemList from "./ItemList"
import "./Styles/ItemListContainer.css"
import { useParams } from 'react-router-dom'
import Body from "./Body"
import { db } from "../utils/firebaseConfig"
import { query,  where, collection, getDocs } from '@firebase/firestore';

const ItemListContainer = (props) => {
    const [datos,setDatos] = useState([])
    const {IdCategory} = useParams()

   //componentDidUpdate
   useEffect(() => {
    
    const getData = async () => {
    
    const queryRef = !IdCategory
    ? collection(db, "productos")
    : query(
    collection(db, "productos"),
    where("category", "==", parseInt(IdCategory))
    );
 
    const response = await getDocs(queryRef);
    const productos = response.docs.map((docs) => {
    const newProduct = {
    ...docs.data(),
    id: docs.id,
    };
    return newProduct;
    });
    setTimeout(() => {
    setDatos(productos);
    }, 2000)
    };
    getData();
    }, [IdCategory])


    return(
    <>
    <Body/>
    <div className='title_Container'>
    <h1><b><i>{props.greeting}</i></b></h1>
    </div>
    <ItemList datos={datos}/>
    </>
    )
}

export default ItemListContainer