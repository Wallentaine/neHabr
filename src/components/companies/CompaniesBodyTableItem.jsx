import React from 'react'
import {Link} from "react-router-dom"

const CompaniesBodyTableItem = () => {


    return (
        <div className="companies__body__tItem content__width">
            <div className="companies__body__tItem__companyInfo">
                <div className="companies__body__tItem__companyInfo__logo"><img src="" alt=""/></div>
                <Link className="companies__body__tItem__companyInfo__block">
                    <div className="companies__body__tItem__companyInfo__title">RU-VDS.COM</div>
                    <div className="companies__body__tItem__companyInfo__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dolor explicabo officiis optio quae quidem repellendus reprehenderit rerum vel.
                    </div>
                </Link>
            </div>
            <div className="companies__body__tItem__companyRating">1842.65</div>
            <div className="companies__body__tItem__companySubscribers">65k</div>
        </div>
    )
}

export default CompaniesBodyTableItem