import React from 'react';
// import '../index';

const Card = (props) => {
    return (
        <div className= {`${props.clase} waves-effect waves-light`}>
            <div className="darken-1 caja2">
              <div>
                <h1><b>{props.cantidad}</b></h1>
                <img 
                    src={props.image} 
                    className="image" 
                    alt="img"
                />
                <p><b> {props.text} </b></p>
              </div>
            </div>
        </div>
    )
}

export default Card