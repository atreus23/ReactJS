import { Grid } from "@mui/material"
import Item from "../Item/Item"
import './itemlist.scss'

const ItemList = ( {productos = []} ) => {

    return (
        <div>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="space-around" alignItems="center">
            { productos.map((prod) => <Grid item key={prod.Id}><Item producto={prod}/></Grid>) }
            </Grid>
        </div>
    )
}

export default ItemList