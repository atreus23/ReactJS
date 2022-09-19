import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import app from '../../Firebase/config'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const db = getFirestore(app)

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams()

    useEffect(() => {

        const Documento = doc(db, 'productos', itemId) 
        getDoc(Documento)
            .then((doc) => {
                setItem({Id: doc.id, ...doc.data()})
            })
    }, [itemId])

    return (
            <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer