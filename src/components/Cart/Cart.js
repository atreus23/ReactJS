import { useCartContext } from "../../Context/CartContext"

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    return (
        <div className="container my-5">
            <h2>Carrito de compras</h2>
            <hr/>

            { cart.map((producto) => (
                <div key={producto.Id}>
                    <h3>{producto.Nombre}</h3>
                    <p>{producto.Descripcion}</p>
                    <small>Color: {producto.color}</small>
                    <p>Precio: {producto.Precio}</p>
                    <p>Cantidad: {producto.contador}</p>
                    <button onClick={() => removeItem(producto.Id)} className="btn btn-danger mx-2">s</button>
                    <hr/>
                </div>
            ))}


            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
}

export default Cart