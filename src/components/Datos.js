import React from 'react';
// import '../index.css';
import Card from './Card';
import Informacion from './Informacion';
import Help from './Help';
import InfoVirus from './InfoVirus';


const Datos = (props)=>{
    const date = new Date()

    const critico = 'https://image.flaticon.com/icons/svg/2750/2750706.svg'
    const infectados = 'https://www.flaticon.es/premium-icon/icons/svg/2805/2805077.svg'
    const recuperados = 'https://www.flaticon.es/premium-icon/icons/svg/2804/2804938.svg'
    const muertos = 'https://image.flaticon.com/icons/svg/2722/2722370.svg'
    const test = 'https://image.flaticon.com/icons/svg/1644/1644144.svg'
    const casosHoy = 'https://img.icons8.com/nolan/64/today.png'

    const helpBolivia= () =>{
        if(props.pais === 'Bolivia' || props.pais === 'bolivia' || props.pais === 'BOLIVIA'){
            return(
                <div className=" section">
                    <h6><b>En casos de Emergencias llamar a las lineas:</b> </h6>
                    <a href="tel: 800101104"><Help text="800101104" clase="col s6 center" icon="phone" /></a>         
                    <a href="tel: 800101106"><Help text="800101104" clase="col s6 center" icon="phone" /></a>
                    <a href="https://www.minsalud.gob.bo/"><Help text="Noticias Bolivia" clase="col s12 center"/></a>
                    <Informacion 
                        url="https://cdn.pixabay.com/photo/2016/07/09/08/58/seniors-1505936_960_720.jpg"
                        title="Ayuda Adultos"
                        lista={["Servicio de ayuda para Adultos Mayores ","En casos de necesidad para auxiliar, apoyar o ayudar a personas mayores comunicarse con los números","74580911", "76571911", "76902911","69451911","69433911", "69452911"]}
                    />
                    <Informacion
                        url="https://cdn.pixabay.com/photo/2016/01/18/17/16/first-aid-1146983_960_720.png"
                        title="Emergencias"
                        lista={["(CB) Hospital Viedma ", "Telf: 4 4220232", "(CB) Hospital Harry Williams ", "Telf: 4 4745612", "(CB) Hospital Cochabamba ", "Telf: 77929119", "(SC)Hospital Japonés ", "Telf: 3 3462031", "(SC) Hospital Católico ", "Telf: 33448883", "(LP) Hospital La Paz ", "Telf: 2 2432155", "(LP) Clínica Alemana ","Telf: 2 2432155"]}
                    />

                </div>
            )
        }
    }

    return(
        <div className="row">
            <h2>Datos Oficiales  {` `}
                <i className="tiny material-icons">check_circle</i>
            </h2>
            <h2><b>{props.pais}</b></h2>
            <p> {`Actualizado: ${date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear()}`} </p>
            
            <Card
                image={infectados} 
                cantidad={props.datosPais.cases}
                text="Confirmados"
                clase="col s4"
            />

            <Card
                image={casosHoy} 
                cantidad={props.datosPais.todayCases}
                text="Casos de Hoy"
                clase="col s4"
            />

            <Card
                image={muertos} 
                cantidad={props.datosPais.deaths}
                text="Total Muertes"
                clase="col s4"
            />

            <Card
                image={critico} 
                cantidad={props.datosPais.critical}
                text="Estado Critico"
                clase="col s4"
            />


            <Card
                image={recuperados} 
                cantidad={props.datosPais.recovered}
                text="Recuperados"
                clase="col s4"
            />

            <Card
                image={test} 
                cantidad={props.datosPais.totalTests}
                text="Pruebas Realizadas"
                clase="col s4"
            />

            {helpBolivia()}
            
            <InfoVirus />
        </div>
    )
}

export default Datos