import { Badge } from "@mui/material";
import { CardWidget } from "./CardWidget";
import './navbar.scss'

import React from 'react'

export const ItemListContainer = () => {
  return (
    <Badge className='carrito' badgeContent={3}><CardWidget/></Badge>
  )
}