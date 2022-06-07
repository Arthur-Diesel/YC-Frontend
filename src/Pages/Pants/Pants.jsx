import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { Nav } from '../../Components/Nav/Nav';
import axios from 'axios';
import { BigCard } from '../../Components/BigCard/BigCard';

export function Pants(){
    const baseUrl = "http://localhost:8080"
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${baseUrl}/products-categories/pants`).then((res) => setData(res.data.data))
      }, [])

    return(
        <>
        <Header />
        <Nav />
        <section id="tshirts" className='my-5'>
            <div className='text-center my-4'>
                <h2 className='display-5'>Calças!</h2>
            </div>
            <div className='container'>
                
                {
                    data && data[0] 
                    ?
                        data.map((element, i) => {
                            return(
                                <BigCard
                                    key={element._id}
                                    _id={element._id}
                                    images={element.images}
                                    name={element.name}
                                    price={element.price}
                                    description={element.description}
                                />
                            )
                        })
                    : 
                        null
                }
                
            </div>
        </section>
        </>
    )
}
