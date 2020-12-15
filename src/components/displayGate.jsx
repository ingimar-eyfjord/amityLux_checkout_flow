import React, { useState } from 'react'
import Modal from './modal.jsx'

export default function Gate() {



    const [Cart, SetCart] = useState(undefined)
    window.addEventListener("message", (event) => {
        if (event.data === "Close Modal") { return } else {
            let items = JSON.parse(event.data)
            SetCart(items)
        }
    }, false);

    return (
        Cart === undefined ? "" : <Modal Cart={Cart}></Modal>
    );
}

