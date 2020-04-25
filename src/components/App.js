import React, {useState, useEffect, useRef} from 'react';  
import Datos from './Datos';
import Header from './Header'
import '../index.css';
import Footer from './Footer';
import Loading from './Loading';


const App = () => {

  // const [paises, setPaises] = useState([])
  const [pais, setPais] = useState('Bolivia')
  const [datosPais, setDatosPais] = useState('')
  const [isFetch, setIsFetch] = useState(true)
  const entrada = useRef()

  useEffect( () => {

    const consultarApi = async () => {
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${pais}`

      const respuesta = await fetch(url)
      const datosPais = await respuesta.json()

      setDatosPais(datosPais)
      setIsFetch(false)
    }

    consultarApi()
    

  }, [pais])

  const handleInput = (event) => {
    setPais(event.target.value)
  }

  if(isFetch){
    return <Loading />
  }



  return (
    <div className="App blue lighten-5">
      <Header />
      <div className="container">
        
        <div className="input-field col s12">
          <i className="material-icons prefix">public</i>
          <input 
            type='text'
            onChange={handleInput}  
            ref={entrada}
            placeholder='Introduce tu Pais'
            className='buscar'
          />
        </div>
        
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
