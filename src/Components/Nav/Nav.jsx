import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link,
  } from "react-router-dom";

export function Nav(){

    const token = localStorage.getItem('token')
    const baseUrl = process.env.REACT_APP_BACKEND_URL
    const [data, setData] = useState({})

    useEffect(() => {
        if(token){
            axios.get(`${baseUrl}/users/me`,
        {
            'headers': {
                'x-auth-token': token
            }
        })
            .then((res) => setData(res.data.dataUser))
        }
    }, [])

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
            <ul>
                {token && data
                    ?
                        <>
                            <Link to={`/aboutme/${data._id}`}>
                                <li className='d-inline-block px-2 text-light lead'>{data.name}</li>
                            </Link>
                            <Link to={`/orders/${data._id}`}>
                                <li className='d-inline-block px-2 text-light lead'>Pedidos</li>
                            </Link>
                            <li className='d-inline-block px-2 text-light lead' role="button" onClick={e => { 
                                localStorage.removeItem('token')
                                setData() 
                            }}
                            >Logout</li>
                        </>
                    :
                        <>
                            <Link to="/login">
                                <li className='d-inline-block px-2 text-light lead'>Login</li>
                            </Link>
                            <Link to="/register">
                                <li className='d-inline-block px-2 text-light lead'>Register</li>
                            </Link>
                        </> 
                }
            </ul>
        </nav>
    )
}