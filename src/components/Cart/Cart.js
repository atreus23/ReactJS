import { useCartContext } from "../../Context/CartContext"
import { BsFillTrash2Fill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()
    
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Carrito de compras</h2>
            <hr/>

            { cart.map((producto) => (
                <div key={producto.Id}>
                    <h3>{producto.Nombre}</h3>
                    <p>{producto.Descripcion}</p>
                    <p>Precio: {producto.Precio}</p>
                    <p>Cantidad: {producto.contador}</p>
                    <button onClick={() => removeItem(producto.Id)} className="btn btn-danger mx-2"><BsFillTrash2Fill/></button>
                    <hr/>
                </div>
            ))}

            {
                <>
                    <h4>Total: ${cartTotal()}</h4>
                    <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                    <button className="btn btn-primary mx-3"><Link to="/Pagar" className="navbar1">Pagar</Link></button>
                </>
            }
  
        </div>
    )
}

export default Cart