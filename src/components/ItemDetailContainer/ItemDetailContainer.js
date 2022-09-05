import { useEffect, useState } from "react"
import { PedirDatos } from "../../data/PedirDatos"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams()

    useEffect(() => {

        PedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.Id === Number(itemId)) )
            })
            .catch(err => console.log(err))
            
        }, [itemId])

    return (
            <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer