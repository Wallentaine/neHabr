import React from 'react'
import classes from './SelectButton.module.css'

const SelectButton = ({children, ...props}) => {

    const joinClasses = [classes.SelectButton]

    if (props.selected) {
        joinClasses.push(classes.isSelect)
    }

    return (
        <button className={joinClasses.join(' ')} {...props}>
            {children}
        </button>
    )
}

export default SelectButton