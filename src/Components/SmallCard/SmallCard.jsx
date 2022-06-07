import React from 'react';

export function SmallCard(props){
    return(
        <div className="card border border-black">
            <img className="card-img-top" src={require('../../Images/' + props.images[0])} alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}