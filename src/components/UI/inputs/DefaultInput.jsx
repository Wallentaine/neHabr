import React from 'react'
import classes from './DefaultInput.module.css'

const DefaultInput = ({...props}) => {
    return (
        <input className={classes.DefaultInput} {...props}/>
    )
}

export default DefaultInput