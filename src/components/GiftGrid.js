import React, { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'

import GifGridItem from './GifGridItem'

const GiftGrid = ({ category }) => {


    const {data, loading} = useFetchGifs(category)
  



    return (
        <Fragment>
            <h3> {category} </h3>

            { loading ? 'Cargando...' : 'Data cargada' }
            { <div className="card-grid">
            
           
               {
                    data.map(img =>(
                        <GifGridItem 
                            key = {img.id} 
                            {...img}
                        />
                    ))
                }
           
            </div> }
        </Fragment>
       
    )
}

export default GiftGrid
