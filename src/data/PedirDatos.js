import { Productos } from './Data'

export const PedirDatos = () => {
    return new Promise( (resolve, reject) => {
            resolve(Productos)
    } )
}