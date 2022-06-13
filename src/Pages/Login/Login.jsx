import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Login(){

    const token = localStorage.getItem('token')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const baseUrl = process.env.REACT_APP_BACKEND_URL
    const navigate = useNavigate()

    function sendLogin(){
        setSuccess(false)
        setError(false)
        axios.post(`${baseUrl}/users/login`, 
        {
            email: email,
            password: password
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                setSuccess(true)
            })
            .catch((err) => {
                setError(true)
            })
    }

    useEffect(() => {
        if(success){
            const timer = setTimeout(() => navigate('/'), 5000)
            return () => clearTimeout(timer)
        }
    }, [success])

    return(
        <>
        <Header />
        { (token && !success && !error ) ? navigate('/') : null }
        { error 
            ?
                <div className="w-100 bg-danger text-center pb-2 pt-3">
                    <p className="text-white lead">Erro!</p>
                    <p className="text-white">Usuário ou senha inválidos.</p>
                </div>
            : 
                null
        }
        { success
            ?
            <div className="w-100 bg-success text-center pb-2 pt-3">
                <p className="text-white lead">Sucesso!</p>
                <p className="text-white">Você devera ser redirecionado para a página home em 5 segundos.</p>
                <p className="text-white">Caso isso não aconteça, clique <Link to="/" className="text-white">aqui.</Link></p>
            </div>
            :
                null
        }
        <div className="container my-5">
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" onChange={v => setEmail(v.target.value)} placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={v => setPassword(v.target.value)} placeholder="Password" />
                </div>
                <br />
                <button type="button" disabled={!email || !password} className="btn btn-primary form-control" onClick={sendLogin}>Submit</button>
            </form>
        </div>
        </>
    )
}