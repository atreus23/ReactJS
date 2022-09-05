import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import './item.scss'
import Box from '@mui/material/Box';

export default function Item({producto}) {

    return (
        <Card className='card' sx={{ width: 250, height: 350 }}>
            <CardHeader className='title' action={<Typography className='producto' variant="h5">${producto.Precio}</Typography>} title={producto.Nombre}/>
            <CardMedia component="img" height="194" image={producto.Imagen} alt={producto.Nombre}/>
            <CardContent className='descripcion'>
                <Typography className='descrip' variant="body2" color="text.secondary">{producto.Descripcion}</Typography>
            </CardContent>
            <Box className='box'><Button><Link className='vermas' to={`/item/${producto.Id}`}>Ver más</Link></Button></Box>            
        </Card>
    );
}