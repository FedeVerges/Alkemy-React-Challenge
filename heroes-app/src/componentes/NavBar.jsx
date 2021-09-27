import React from 'react';
import { Link } from 'react-router-dom';

// Utilizar logica para determinar si el usuario posee el token de sesion en el localstorage, de lo contrario redirigir al login.


const NavigationBar = () => {
    return (
        <div>
            <nav className="nav-bar">
                <div className="container-nav-bar">
                    <div className="container-nav-bar-logo">
                        <Link className="nav-bar-logo" to='/'>
                            Hero App
                        </Link>
                    </div>
                <div>
                    <ul>
                        <li>

                            <Link className="nav-bar-link" to='/'>Home</Link>
                        </li>
                        <li>

                            <Link className="nav-bar-link" to='/about'>About</Link>
                        </li>
                    </ul>
                    </div>
                    </div>


            </nav>
        </div>
    );
};

export default NavigationBar;