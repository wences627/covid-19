import React from 'react';
// import '../index';

const Help = (props) => {

    return (
        <div className={`section ${props.clase} help`}>
            <button className="btn waves-effect waves-light boton"> 
                {props.text}
                <i className="material-icons"> {props.icon} </i>
            </button>
        </div>
    )
}

export default Help