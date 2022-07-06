import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function Contador({ stock }){
    const [num, setNum] = useState(0);

    useEffect(()=>{
        if(num == stock - 2){
            Swal.fire({
                title: 'Atencion!',
                text: 'Quedan pocas unidades!',
                icon: 'warning',
                timer: 2000
              })
        }
    }, [num])

    const sumar = () => {
        if(num < stock){
            setNum(num + 1)
        }
        else{
            Swal.fire({
                title: 'Atencion!',
                text: 'Ya ha llegado al stock maximo de este producto',
                icon: 'warning',
                timer: 2000
              })
        }
    }

    const resta = () => {
        if(num>0){
            setNum(num - 1)
        }
    }

    const reiniciar = () => {
        setNum(0)
    }

    return (
        <>
           <h3 style={{marginLeft: 20}}>{num}</h3>
           <p> { stock > 1 ? `${stock} unidades disponibles` : `${stock} unidad disponible` }</p>
           <button onClick={sumar}>Suma!</button>
           <button onClick={resta}>Resta!</button>
           <button onClick={reiniciar}>Reiniciar!</button>
           
           <button>{ num > 0 ? `Agregar al carrito` : `Elegi tu cantidad` }</button>
        </>
    )
}
export default Contador;