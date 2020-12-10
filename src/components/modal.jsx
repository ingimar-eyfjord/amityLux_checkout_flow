import React from 'react'
import CardName from './inputFields/cardname.jsx'
import Email from './inputFields/emailinput.jsx'
import CountryCodeselect from './inputFields/countryCodeselect.jsx'
import { FormattedInputsPhone as Phone } from './inputFields/phoneInputFiled.jsx'
import Cards from './inputFields/cards.jsx'
export default function Modal() {
    return (
        <div className="Modal">
            <section className="header">
                <div className="locationInfo">
                    <h1>You're buying</h1>
                    <h2>Gift Card</h2>
                </div>

                <div className="amountModule"></div>
            </section>

            <div className="cart">

            </div>
            <div className="amount">

            </div>
            <div className="cardInformationForm">
                <form action="PersonalInfo">
                    <CardName></CardName>
                    <Email></Email>
                    <CountryCodeselect></CountryCodeselect>
                    <Phone></Phone>
                    <Cards></Cards>

                </form>
            </div>

        </div>
    )
}