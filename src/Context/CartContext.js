import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])


    const addToCart = (producto) => {
      setCart([...cart, producto])
    }

    const removeItem = (Id) => {
        setCart( cart.filter((producto) => producto.Id !== Id) )
    }
  
    const isInCart = (Id) => {
      return cart.some((producto) => producto.Id === Id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, producto) => acc + producto.contador, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, producto) => acc + producto.contador * producto.Precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: '¿Esta seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
          }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}