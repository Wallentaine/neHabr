import React from 'react'
import '../styles/Companies.css'
import CompaniesHead from "../components/companies/CompaniesHead"
import CompaniesBody from "../components/companies/CompaniesBody"

const Companies = () => {
    return (
        <div className="Companies page__width">
            <CompaniesHead/>
            <CompaniesBody/>
        </div>
    )
}

export default Companies