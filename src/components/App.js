import React, {useState, useEffect} from 'react';  
import Datos from './Datos';
import Header from './Header'
import '../index.css';
import Footer from './Footer';


const App = () => {

  // const [paises, setPaises] = useState('')
  const [pais, setPais] = useState('Bolivia')
  const [datosPais, setDatosPais] = useState('')

  useEffect( () => {
    const consultarApi = async () => {
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${pais}`

      const respuesta = await fetch(url)
      const datosPais = await respuesta.json()

      setDatosPais(datosPais)
    }
    consultarApi()
  }, [pais, datosPais])



  const handleChange = (event) => {
    setPais(event.target.value)
  }
  return (
    <div className="App blue lighten-5">
      <Header />
      <div className="container">
        <h5>Selecciona tu Pais</h5>
        <form >
          <select value={pais} onChange={handleChange}>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brasil</option>
            <option value="Colombia">Colombia</option>
            <option value="Chile">Chile</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
          </select>
        </form>
        <Datos 
          pais={pais}
          datosPais={datosPais}
        />


      </div>
      <Footer />
    </div>
  )
}

export default App;
