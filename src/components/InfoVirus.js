import React from 'react';
import Informacion from './Informacion';

const InfoVirus = ( ) =>{
    return(
        <div>
            <h4>Información</h4>
            <hr/>
            <Informacion 
                url="https://cdn.pixabay.com/photo/2020/03/08/23/24/coronavirus-4914028_960_720.jpg"
                title="Que es coronavirus"
                text="Los coronavirus son una extensa familia de virus que pueden causenfermedades tanto en animales como en humanos. En los humanos, se sabe que varicoronavirus causan infecciones respiratorias que pueden ir desde el resfriacomún hasta enfermedades más graves como el síndrome respiratorio de Oriente Med(MERS) y el síndrome respiratorio agudo severo (SRAS)."
            />
            
            <Informacion 
                url="https://cdn.pixabay.com/photo/2020/03/20/21/29/coronavirus-4952102_960_720.jpg"
                title="Como se Transmite"
                text="Se transmite de persona a persona a traves de gotitas que expulsa una persona enferma al hablar, toser o estornudar.
                Pueden ser inhaladas por las personas que están cerca al enfermo y tambiquedarse en cualquier tipo de superficie (pasamanos, mesas, lapiceros, entre otry ser tocadas por las manos.
                El virus ingresa a nuestro organismo cuando nos tocamos los ojos, la nariz y boca con las manos sin lavar."
            />
            
            <Informacion 
                url="https://cdn.pixabay.com/photo/2020/03/12/06/12/coronavirus-4924022_960_720.jpg"
                title="Síntomas"
                lista= {["Tos.", "Fiebre alta.", "Estornudos.", "Escalofríos.", "Dolor Garganta.", "Complicación al respirar."]}
            />
            
            <Informacion 
                url="https://cdn.pixabay.com/photo/2020/03/27/15/33/virus-4973943_960_720.jpg"
                title="Medidas Preventiva"
                text="Puede reducir el riesgo de infección:
                Lavándose las manos regularmente con agua y jabón o con desinfectante de manosbase de alcohol
                Cúbrase la nariz y la boca al toser y estornudar con un pañuelo de papdesechable o con la parte interna del codo. Evitando el contacto directo (1 meto 3 pies) con cualquier persona con síntomas de resfriado."
            />
        </div>
    )   
}

export default InfoVirus