import React, { useState } from 'react'
import Form from './form.jsx'
import Sales from './sales.jsx'
import PaymentConfirm from './PaymentConfirm'
export default function Modal(props) {

    const [ConfirmPayment, SetConfirmation] = useState(false)
    function ChangeState() {
        SetConfirmation(true)
    }
    return (
        <div className="Modal">
            <Sales Cart={props.Cart}></Sales>
            {ConfirmPayment ? <PaymentConfirm cart={props.Cart} /> : <Form SetConfirmation={ChangeState} Cart={props.Cart}></Form>}
        </div>
    )
}
