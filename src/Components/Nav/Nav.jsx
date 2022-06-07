import React from 'react';
import {
    Link,
  } from "react-router-dom";

export function Nav(){
    return(
        <nav className='w-100 bg-dark text-center py-1 text-light'>
            <ul className='list-unstyled'>
                <Link to="/">
                    <li className='d-inline-block px-2 text-light'>Home</li>
                </Link>
                <Link to="/tshirts">
                    <li className='d-inline-block px-2 text-light'>Camisetas</li>
                </Link>
                <Link to="/hoddies">
                    <li className='d-inline-block px-2 text-light'>Moletons</li>
                </Link>
                <Link to="/jackets">
                    <li className='d-inline-block px-2 text-light'>Jaquetas</li>
                </Link>
                <Link to="/pants">
                    <li className='d-inline-block px-2 text-light'>Calças</li>
                </Link>
                <Link to="/accessories">
                    <li className='d-inline-block px-2 text-light'>Acessórios</li>
                </Link>
            </ul>
        </nav>
    )
}