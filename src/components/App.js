import React, {useState, useEffect} from 'react';  
import Datos from './Datos';
import Header from './Header'
import '../index.css';
import Footer from './Footer';
import Loading from './Loading';


const App = () => {

  // const [paises, setPaises] = useState('')
  const [pais, setPais] = useState('Bolivia')
  const [datosPais, setDatosPais] = useState('')
  const [isFetch, setIsFetch] = useState(true)

  useEffect( () => {
    const consultarApi = async () => {
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${pais}`

      const respuesta = await fetch(url)
      const datosPais = await respuesta.json()

      setDatosPais(datosPais)
      setIsFetch(false)
    }
    consultarApi()
  }, [pais, datosPais])



  const handleChange = (event) => {
    setPais(event.target.value)
    event.preventDefault()
  }

  const enviarDatos = (event) => {
    event.preventDefault();
  }

  if(isFetch){
    return <Loading />
  }



  return (
    <div className="App blue lighten-5">
      <Header />
      
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={enviarDatos}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">public</i>
                <input id="icon_prefix" type="text" className="validate" onChange={handleChange}/>
                <label htmlFor="icon_prefix" onChange={handleChange} onSubmit={handleChange}>Introduce tu País</label>
              </div>
            </div>
              <div className="buscar center">
                <button className="waves-effect waves-light btn-small center" type="submit" name="action">Buscar
                <i className="material-icons right">search</i>
                </button>
              </div>
          </form>
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
