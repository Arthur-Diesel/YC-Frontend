import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { Nav } from '../../Components/Nav/Nav';
import { SmallCard } from '../../Components/SmallCard/SmallCard';
import axios from 'axios';

export function Home(){
    const baseUrl = "http://localhost:8080"
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${baseUrl}/products`).then((res) => setData(res.data.data))
      }, [])

    return(
        <>
        <Header />
        <Nav />
        <section id="new" className='my-5'>
            <div className='text-center my-4'>
                <h2 className='display-5'>Novidades!</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        { data && data[0] 
                            ? 
                                <SmallCard 
                                    name={data[0].name}
                                    description={data[0].description}
                                    images={data[0].images}
                                />
                            : null
                        }
                    </div>
                    <div className='col-12 col-md-4'>
                        { data && data[1] 
                            ? 
                                <SmallCard 
                                    name={data[1].name}
                                    description={data[1].description}
                                    images={data[1].images}
                                />
                            : null
                        }
                    </div>
                    <div className='col-12 col-md-4'>
                        { data && data[2]
                            ? 
                                <SmallCard 
                                    name={data[2].name}
                                    description={data[2].description}
                                    images={data[2].images}
                                />
                            : null
                        }
                    </div>
                </div>
            </div>
        </section>    
        </>
    )
}