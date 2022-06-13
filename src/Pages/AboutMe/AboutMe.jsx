import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import axios from 'axios';
import { Nav } from '../../Components/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap'

export function AboutMe(){

    const token = localStorage.getItem('token')
    const baseUrl = process.env.REACT_APP_BACKEND_URL
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleCloseSuccess = () => setSuccess(false)
    const handleCloseError = () => setError(false)

    const [showEmail, setShowEmail] = useState(false)
    const [email, setEmail] = useState('')

    const [showName, setShowName] = useState(false)
    const [name, setName] = useState('')
    
    const [showTelephone, setShowTelephone] = useState(false)
    const [telephone, setTelephone] = useState('')

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const handleCloseEmail = () => setShowEmail(false)
    const handleShowEmail = () => setShowEmail(true)
    const handleCloseName = () => setShowName(false)
    const handleShowName = () => setShowName(true)
    const handleCloseTelephone = () => setShowTelephone(false)
    const handleShowTelephone = () => setShowTelephone(true)
    const handleClosePassword = () => setShowPassword(false)
    const handleShowPassword = () => setShowPassword(true)

    useEffect(() => {
        axios.get(`${baseUrl}/users/me`,
        {
            'headers': {
                'x-auth-token': token
            }
        })
            .then((res) => setData(res.data.dataUser))
            .catch((err) => navigate('/login'))
    }, [success, error])
    
    function changePasswordVisibility(){
        const passwordInput = document.getElementById('passwordInput')
        const eyeButton = document.getElementById('eyeButton')
        if(passwordInput.type === 'password') { 
            passwordInput.type = 'text' 
            eyeButton.className = 'bi bi-eye'
        } else {
            passwordInput.type = 'password'
            eyeButton.className = 'bi bi-eye-slash'
        }
    }

    function updateData() {

        function setNewData () {
            let newData = {}
            if(name){
                newData.name = name
            }
            if(email){
                newData.email = email
            }
            if(password){
                newData.password = password
            }
            if(telephone){
                newData.telephone = telephone
            }
            return newData
        }

        axios.put(`${baseUrl}/users`,
            setNewData(),
            {
                headers: {
                    'x-auth-token': token
                }
            })
        .then((data) => {
            handleCloseEmail()
            handleCloseName()
            handleCloseTelephone()
            handleClosePassword()
            setSuccess(true)
        })
        .catch((err) => {
            handleCloseEmail()
            handleCloseName()
            handleCloseTelephone()
            handleClosePassword()
            setError(true)
        })
    }

    useEffect(() => {
        if(success){
            const timer = setTimeout(() => handleCloseSuccess(), 5000)
            return () => clearTimeout(timer)
        }
    }, [success])

    useEffect(() => {
        if(error){
            const timer = setTimeout(() => handleCloseError(), 5000)
            return () => clearTimeout(timer)
        }
    }, [error])

    return(
        <>
        {token ? null : navigate('/login')}
        
        <Modal show={success} onHide={handleCloseSuccess}>
            <Modal.Header closeButton>
                <Modal.Title className='text-success'>Sucesso!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Os dados foram alterados com sucesso!</p>
            </Modal.Body>
        </Modal>
        <Modal show={error} onHide={handleCloseError}>
            <Modal.Header closeButton>
                <Modal.Title className='text-danger'>Erro!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Houve um erro na atualização dos dados!</p>
            </Modal.Body>
        </Modal>

        <Header />
        <Nav />
        <div className='container text-left my-3'>

            <br />
            <button className='btn btn-dark d-inline-block' onClick={handleShowName}><i className="bi bi-pencil-square"></i></button><p className='d-inline-block mx-3'>Nome: {data.name}</p>

            <Modal show={showName} onHide={handleCloseName}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterar Nome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Novo Nome : </p>
                    <input type="text" onChange={ (e) => setName(e.target.value) } />
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-dark' onClick={updateData}> Salvar </button>
                    <button className='btn btn-dark' onClick={handleCloseName}> Fechar </button>
                </Modal.Footer>
            </Modal>

            <br />
            <button className='btn btn-dark d-inline-block' onClick={handleShowEmail}><i className="bi bi-pencil-square"></i></button><p className='d-inline-block mx-3'>Email: {data.email}</p>

            <Modal show={showEmail} onHide={handleCloseEmail}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterar Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Novo Email : </p>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-dark' onClick={updateData}> Salvar </button>
                    <button className='btn btn-dark' onClick={handleCloseEmail}> Fechar </button>
                </Modal.Footer>
            </Modal>

            <br />
            <button className='btn btn-dark d-inline-block' onClick={handleShowTelephone}><i className="bi bi-pencil-square"></i></button><p className='d-inline-block mx-3'>Telephone: {data.telephone}</p>

            <Modal show={showTelephone} onHide={handleCloseTelephone}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterar Telefone</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Novo Telefone : </p>
                    <input type="tel" onChange={ (e) => setTelephone(e.target.value) } />
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-dark' onClick={updateData}> Salvar </button>
                    <button className='btn btn-dark' onClick={handleCloseTelephone}> Fechar </button>
                </Modal.Footer>
            </Modal>

            <br />
            <button className='btn btn-dark d-inline-block' onClick={handleShowPassword}><i className="bi bi-pencil-square"></i></button><p className='d-inline-block mx-3'>Password: ********</p>

            <Modal show={showPassword} onHide={handleClosePassword}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterar Senha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Nova Senha : </p>
                    <button className='btn btn-dark d-inline-block' onClick={changePasswordVisibility}><i className="bi bi-eye" id="eyeButton"></i></button><input id='passwordInput' type="password" onChange={ (e) => setPassword(e.target.value) } className="ms-3 align-middle" />
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-dark' onClick={updateData}> Salvar </button>
                    <button className='btn btn-dark' onClick={handleClosePassword}> Fechar </button>
                </Modal.Footer>
            </Modal>

        </div>
        </>
    )
}