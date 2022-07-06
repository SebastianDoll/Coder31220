import { useEffect, useState } from 'react';
import './Body.css';
import Card from './Card'

function Body() {

  const [info, setInfo] = useState([])

  useEffect(()=>{
    fetch('data.json') //Trae el Response completo
    .then((resp) => resp.json()) //Extrae la informacion a utilizar de dentro de el Response
    .then((data) => setInfo(data)) //Setear esa informacion en nuestro State
  }, [])

  return (
    <section className='cuerpo'>
      <div>
        <h2>Catalogo de productos</h2>
        <p>Elegi tus productos de esta lista:</p>
      </div>
      <div className='catalogo'>
        {info && info.map(i => <Card product={i.nombre} price={i.precio} />)}
      </div>
    </section>
  );
}

export default Body;