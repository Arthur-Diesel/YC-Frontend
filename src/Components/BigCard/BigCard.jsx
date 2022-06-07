import React from 'react';
import { Link } from 'react-router-dom';

export function BigCard(props){
    return(
        <div className='w-75 border border-dark my-3 mx-auto'>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <img src={require('../../Images/' + props.images[0])} className="img-fluid p-2" alt="..."/>
                </div>
                <div className='col-12 col-md-9 p-2'>
                    <h5>{props.name}</h5>
                    <h6>R${props.price},00</h6>
                    <p>{props.description}</p>
                    <p>P | M | G | GG</p>
                    <Link to={`/tshirts/${props._id}`}><button type='button' className='btn btn-danger'>Clique Aqui Para Comprar!</button></Link>
                </div>
            </div>
        </div>
    )
}