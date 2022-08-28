import { useState } from "react"
import { Button } from '@mui/material'
import './itemcount.scss'

const ItemCount = ({Stock}) => {

    const [contador, setContador] = useState(0)
    const [stock, setStock] = useState(Stock)
    
    const handleRestar = () => {
        if (contador > 1) {
        setContador(contador - 1)
        }
    }
    const handleSumar = () => {
        if (contador < stock) {
        setContador(contador + 1)
        }
    }    
    const comprar = () => {
        if (contador >= 1 && contador <= stock){
            setStock (stock - contador)
            alert('Aregado al carrito')
        }
        else if (contador > stock){
            alert('No hay stock')
        }
    }
    return (
        <div className="contador">
            <Button onClick={handleRestar} variant="contained" color="error">-</Button>
            <span className="cantidad">Cantidad: {contador}</span>
            <Button onClick={handleSumar} variant="contained" color="success">+</Button>
            <br/>
            <p>Stock: {stock}</p>
            <Button onClick={comprar} variant="contained" color="primary">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount