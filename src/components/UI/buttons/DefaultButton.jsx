import React from 'react'
import classes from '../buttons/DefaultButton.module.css'

const DefaultButton = ({children, ...props}) => {
    return (
        <button className={classes.DefaultButton} {...props}>
            {children}
        </button>
    )
}

export default DefaultButton