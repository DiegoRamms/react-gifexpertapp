
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'

const GifExpertApp = props => {


    const [categories, setCategories] = useState(['Dragon Ball'])


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
 
            <ol>
                {
                categories.map(category  => (
                        <GiftGrid key = {category} category = {category}/>
                ))
                }
            </ol>
        </div>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp


