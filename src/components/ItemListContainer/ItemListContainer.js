import { useEffect, useState } from "react"
import { PedirDatos } from "../../data/PedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Categorias from "../Categorias/Categorias"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { Categoria } = useParams()

    useEffect(() => {
        PedirDatos()
            .then( (res) => {
                if (!Categoria) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.Categoria === Categoria) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [Categoria])


    return (
        <div>
            <h2 className="produc">Productos</h2>
            <hr/>
            <Categorias/>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer