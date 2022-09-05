import ItemCount from '../ItemCount/itemcount'
import './ItemDetail.scss'
import Carousel from 'react-bootstrap/Carousel';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
        <Button className='negro' key="one">Negro</Button>,
        <Button className='azul' key="two">Azul</Button>,
        <Button className='rojo' key="three">Rojo</Button>,
];

const ItemDetail = ({item}) => {

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
            <Box className='boton' sx={{display: 'flex', '& > *': {m: 1,},}}>
                  <ButtonGroup aria-label="outlined primary button group" variant="contained">{buttons}</ButtonGroup>
            </Box>
            <ItemCount Stock={item.Stock}/>
        </div>
    )
}

export default ItemDetail