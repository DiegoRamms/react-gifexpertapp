import React from 'react'

function GifGridItem({id, title, url}) {
    
    console.log(title)

    return (
        <div className="card animate__animated animate__bounce ">
            <img src={url} alt={title}/>
            <p>{title}</p>
            
        </div>
    )
}

export default GifGridItem
