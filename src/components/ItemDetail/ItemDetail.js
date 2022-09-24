import ItemCount from '../ItemCount/itemcount'
import './ItemDetail.scss'
import Carousel from 'react-bootstrap/Carousel';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react"
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ItemDetail = ({item}) => {

    const { addToCart, isInCart } = useCartContext()

    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState()

    useEffect(() => {
        setStock(item.Stock)
    },[item.Stock])

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
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Agregado al carrito',
                showConfirmButton: false,
                timer: 1500
              })

            const itemToCart = {
                Id: item.Id,
                Precio: item.Precio,
                Nombre: item.Nombre,
                Descripcion: item.Descripcion,
                contador,
            }
            
            addToCart(itemToCart)
        }
}

    return (
        <div className="detalles">
            <Carousel variant='dark' className='carousel' fade>
                <Carousel.Item>
                    <img className="d-block imagen" src={item.Imagen} alt=""/>
                    <Carousel.Caption>
                        <h3>{item.Nombre}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block imagen" src={item.Imagen} alt=""/> 
                    <Carousel.Caption>
                        <h3>{item.Nombre}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block imagen" src={item.Imagen} alt=""/> 
                    <Carousel.Caption>
                        <h3>{item.Nombre}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>{item.Descripcion}</p>
            <h4>${item.Precio}</h4>
            {
                isInCart(item.Id)
                ?   <><Button variant="contained" color="success"><Link className='compra' to="/">Seguir navegando</Link></Button><Button variant="contained" color="error" className='mx-3'><Link className='compra' to="/Cart">Terminar compra</Link></Button></>
                :   <ItemCount handleRestar={handleRestar} contador={contador} handleSumar={handleSumar} comprar={comprar} stock={stock}/>
            }
        </div>
    )
}

export default ItemDetail