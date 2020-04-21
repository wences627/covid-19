import React from 'react';


const Informacion = (props) => {
    return(
        <div>
          <div className="col s12 m6">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator card-image" src={props.url} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>

                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
                    {props.text ? 
                      <p className="parrafo" >{props.text}</p> :
                      <ul className="center">
                        {props.lista.map((fila, index) => (
                          <li className="linea" key={index}>{fila}</li>
                        ))}
                      </ul>
                    }
                </div>
            </div>
          </div>
        </div>
    )
}


export default Informacion
