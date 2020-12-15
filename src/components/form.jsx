import React, { useState } from 'react'
import CardName from './inputFields/cardname.jsx'
import Email from './inputFields/emailinput.jsx'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CountryCodeselect from './inputFields/countryCodeselect.jsx'
import { FormattedInputsPhone as Phone } from './inputFields/phoneInputFiled.jsx'
import { FormattedInputs as CardNumber } from './inputFields/cardInputField.jsx'
import CVC from './inputFields/cvc.jsx'
import Cards from './inputFields/cards.jsx'
import { Fname as Name } from './inputFields/FormName.jsx'
import ExpDate from './inputFields/expdate.jsx'
import Button from '@material-ui/core/Button';
export default function Form(props) {


    // const total = props.cart.length > 0 ? props.cart.length * 50 : 0;
    const [paymentType, setpaymentType] = useState("")
    const [state, setState] = useState({
        checkedB: false,
    });




    const formDetails = {
        Firstname: localStorage.getItem("Name"),
        CountryCode: "",
        Phone: localStorage.getItem("PhoneNumber"),
        Email: localStorage.getItem("Email"),
        cardholder: localStorage.getItem("CardHolder"),
        cardnum: localStorage.getItem("Card"),
        CVC: localStorage.getItem("CVC"),
        ExpirationDate: localStorage.getItem("ExpirationDate"),
        saveCardInfo: true,
        CardType: localStorage.getItem("CardType") || paymentType,
    }
    const [formData, setFormData] = useState(formDetails)

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setFormData({ ...formData, saveCardInfo: state.checkedB });
        localStorage.setItem("SaveInfo", event.target.value)
    };
    const flexColumn = {
        display: "flex",
        flexDirection: "column"
    }

    function submitFunc(e) {
        e.preventDefault()
        props.SetConfirmation(true)
    }
    function CloseWindow() {
        window.postMessage("Close Modal", "http://timidesign.org")
    }

    return (

        <form className="CheckoutFlow-cards childrenMargin" onSubmit={submitFunc} style={flexColumn}>
            <h3 className="separation">Billing information</h3>
            <div className="phone">
                <Name formData={formData} setFormData={setFormData} ></Name>
                <Email formData={formData} setFormData={setFormData}></Email>
            </div>
            <div className="phone">

                <CountryCodeselect formData={formData} setFormData={setFormData}></CountryCodeselect>

                <Phone required className="phoneCountry" formData={formData} setFormData={setFormData}></Phone>
            </div>
            <h3 className="separation">Payment information</h3>
            <div className="cardsSelect">
                <Cards formData={formData} setFormData={setFormData}></Cards>
            </div>

            <div className="cardInput">
                <div className="phone">
                    <CardName formData={formData} setFormData={setFormData} ></CardName>
                    <CardNumber formData={formData} setFormData={setFormData} ></CardNumber>
                </div>
                <div className="phone">

                    <CVC formData={formData} setFormData={setFormData} ></CVC>
                    <ExpDate formData={formData} setFormData={setFormData} ></ExpDate>
                </div>
                <div style={{ marginLeft: "1rem" }} className="flexrow left">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Save Creditcard info"
                    />

                </div>
                <div className="flexrow buttonRow">
                    <Button variant="contained" type="submit" color="primary" >Confirm payment</Button>
                    <Button onClick={CloseWindow} type="reset" variant="contained" color="secondary">
                        Cancel payment
</Button>
                </div>
            </div>
        </form>
    )
}