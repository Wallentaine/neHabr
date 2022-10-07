import React from 'react'
import {Link} from "react-router-dom"

const CreatorsBodyTableItem = () => {



    return (
        <div className="creators__body__tItem content__width">
            <div className="creators__body__tItem__creatorInfo">
                <div className="creators__body__tItem__creatorInfo__logo"><div></div></div>
                <div className="creators__body__tItem__creatorInfo__block">
                    <div className="creators__body__tItem__creatorInfo__name">
                        <div className="creators__body__tItem__creatorInfo__fullName">Колесниченко Алексей</div>
                        <Link className="creators__body__tItem__creatorInfo__nickName">@Wallentaine</Link>
                    </div>
                    <div className="creators__body__tItem__creatorInfo__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eaque earum ipsum natus perspiciatis, quae repellat sint!
                        Doloribus ipsum iure maxime, minima molestias natus nobis
                        quod recusandae sit tempora velit voluptate?
                    </div>
                </div>
            </div>
            <div className="creators__body__tItem__creatorPosts">22</div>
            <div className="creators__body__tItem__creatorRating">113.74</div>
            <div className="creators__body__tItem__creatorSubscribers">12k</div>
        </div>
    )
}

export default CreatorsBodyTableItem