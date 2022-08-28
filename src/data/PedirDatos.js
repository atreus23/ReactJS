import { Productos } from './Data'

export const PedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(Productos)
        }, 2000)
    } )
}