import React from 'react'
import '../styles/Сreators.css'
import CreatorsHead from "../components/creators/CreatorsHead"
import CreatorsBody from "../components/creators/CreatorsBody"

const Creators = () => {
    return (
        <div className="Creators page__width">
            <CreatorsHead/>
            <CreatorsBody/>
        </div>
    )
}

export default Creators