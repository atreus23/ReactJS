import { useEffect, useState } from "react"
import { PedirDatos } from "../../data/PedirDatos"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        PedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer