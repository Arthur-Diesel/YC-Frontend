import React from 'react';
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <header className='w-100 bg-dark text-center py-3'>
            <Link to="/" className='text-decoration-none'>
                <h1 className='display-1 text-light'>YoungCommerce</h1>
            </Link>
            <p className='text-light '>I put some ice on you 'cause you got a cold heart</p>
        </header>
    )
}