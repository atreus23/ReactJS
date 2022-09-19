import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Categorias from "../Categorias/Categorias"
import app from '../../Firebase/config'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const db = getFirestore(app)

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { Categoria } = useParams()

    useEffect(() => {
        const basededatos = collection(db, 'productos')
        const productosdata = Categoria ? query(basededatos, where('Categoria', '==', Categoria)) : basededatos
        getDocs(productosdata)
        .then((Pedido) => {
            const datos = Pedido.docs.map( (Archivos) => ({id: Archivos.id, ...Archivos.data()}) )
            setProductos(datos)
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