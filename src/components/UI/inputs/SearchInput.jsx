import React from 'react'
import classes from './SearchInput.module.css'

const SearchInput = ({...props}) => {
    return (
        <>
            <input className={classes.SearchInput} {...props}/>
        </>
    )
}

export default SearchInput