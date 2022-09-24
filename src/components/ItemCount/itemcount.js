import { Button } from '@mui/material'
import './itemcount.scss'

const ItemCount = ({handleRestar, contador, handleSumar, comprar, stock}) => {

    return (
        <div className="contador">
            <Button onClick={handleRestar} className="boton" color="error">-</Button>
            <span className="cantidad">Cantidad: {contador}</span>
            <Button onClick={handleSumar} className="boton" color="success">+</Button>
            <br/>
            <p>Stock: {stock}</p>
            <Button onClick={comprar} variant="contained" color="primary">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount