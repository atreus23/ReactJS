import { Button } from '@mui/material'
import './itemcount.scss'

const ItemCount = ({handleRestar, contador, handleSumar, comprar, stock}) => {

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