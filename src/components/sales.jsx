import React, { useState, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
export default function Sales({ Cart }) {

    String.prototype.Capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
    if (Cart["hidden-1"]) {
        const titlePriceCart = Cart["radio-1"]
        const Split = titlePriceCart.split("-")
        Cart.Price = Split.pop()
        Split.forEach(e => {
            e = e.toString().Capitalize()
        })
        Cart.Title = Split.join(" ")

    }
    const [amount, setAmount] = useState()
    useEffect(() => {
        if (Cart["number-1"]) {
            setAmount(Cart["number-1"])
        } else {
            setAmount(1)
        }
    }, [])
    return (
        <div className="ProductInfo">
            <section className="header">
                <div className="cart">
                    <h2>You're buying</h2>
                    {Cart["hidden-1"] ? <h2>Gift cart</h2> : ""}
                    <h2>{Cart.Title}</h2>
                </div>
                <div>
                    <h2>Price</h2>
                    {Cart["number-1"] ? <InputLabel>Amount</InputLabel> : ""}
                    {Cart["number-1"] ? <Input id="number" onChange={e => setAmount(e.target.value)} type="number" value={amount} min="1" ></Input> : ""}
                    <p>
                        Price: {parseFloat(Cart.Price * amount)} Euros
                    </p>
                </div>
                {Cart["hidden-1"] === undefined ? <div className="locationInfo">
                    <h2>Tour Information</h2>
                    <p>Trip date: {Cart["date-1"]}</p>
                    <p>Duration of tour: {Cart.Duration}</p>
                    <p>Meeting point: {Cart.Meeting}</p>
                    <p>Tour language: {Cart.Language}</p>
                </div> : ""}
                <div className="locationInfo">
                    <h2>Personal info</h2>
                    <p>Your name: {Cart["name-1"]}</p>
                    <p>Your email address: {Cart["email-1"]}</p>
                </div>
            </section>
        </div>
    )
}