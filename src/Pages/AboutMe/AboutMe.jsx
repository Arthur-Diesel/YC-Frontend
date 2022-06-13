import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import axios from 'axios';
import { Nav } from '../../Components/Nav/Nav';
import { useNavigate } from 'react-router-dom';

export function AboutMe(){

    const token = localStorage.getItem('token')
    const baseUrl = process.env.REACT_APP_BACKEND_URL
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${baseUrl}/users/me`,
        {
            'headers': {
                'x-auth-token': token
            }
        })
            .then((res) => setData(res.data.dataUser))
    }, [])

    return(
        <>
        {token ? null : navigate('/')}
        <Header />
        <Nav />
        </>
    )
}