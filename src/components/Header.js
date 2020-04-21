import React from 'react';
// import '../index.css'

const Header = () =>{
    const infoBolivia = 'https://www.embajadadebolivia.es/informacion-general/' 
    const urlImage = 'https://image.flaticon.com/icons/svg/299/299535.svg'
    return (
        <div className="navbar-fixed">
            <nav className="head">
              <div className="nav-wrapper container">
                <a href="#!" className="brand-logo"><b>Covid-19</b></a>
                <ul className="right">
                    <li>
                      <a href={infoBolivia}>
                          <img src={urlImage} alt="bolivia" className="image valign-wrapper pulse"/>
                      </a>
                    </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Header