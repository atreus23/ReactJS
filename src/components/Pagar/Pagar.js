import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import app from "../../Firebase/config"

const db = getFirestore(app)

const Pagar = () => {

    const { cart, cartTotal, terminarCompraConSwal } = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        const ordenesRef = collection(db, 'productos comprados')

        addDoc(ordenesRef, orden)
           .then((doc) => {
                terminarCompraConSwal(doc.id)
            })
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Forma de pago</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input required name="nombre" onChange={handleInputChange} value={values.nombre} type={'text'} className="my-3 form-control" placeholder="Tu nombre"/>
                <input required name="email" onChange={handleInputChange} value={values.email} type={'email'} className="my-3 form-control" placeholder="Email"/>
                <input required name="direccion" onChange={handleInputChange} value={values.direccion} type={'text'} className="my-3 form-control" placeholder="Dirección"/>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Pagar