import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from "../ItemCount/itemcount"

export default function Item({producto}) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader action={<Typography variant="h5">${producto.Precio}</Typography>} title={producto.Nombre}/>
            <CardMedia component="img" height="194" image={producto.Imagen} alt={producto.Nombre} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">{producto.Descripcion}</Typography>
            </CardContent>
            <ItemCount Stock={producto.Stock}/>
        </Card>
    );
}