import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
export default function PaymentConfirm(props) {


  const chcekStylestate = {
    display: "none"
  }
  const loaderStylestate = {
    display: "block"
  }
  const [chcekStyle, setStyle] = useState(chcekStylestate)
  const [loaderstyle, setStyleLoad] = useState(loaderStylestate)

  useEffect(() => {
    const timer = setTimeout(() => {
      const chcekStyleset = { display: "block" }
      const loadStyleset = { display: "none" }
      setStyleLoad(loadStyleset)
      setStyle(chcekStyleset)
      // props.clearCart();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function CloseWindow() {
    window.postMessage("Close Modal", "http://timidesign.org")
  }


  return (

    <div className="messages">
      {/* <!-- Credit: https://dribbble.com/shots/5092176-Newton-Loader --> */}
      <div style={loaderstyle} className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="orderConP">
        <p style={loaderstyle}>Placing your order</p>
        <p style={chcekStyle}>You order is successful</p>
      </div>

      {/* https://codepen.io/solomonkitumba/pen/rNNYWxE */}
      <div style={chcekStyle} className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
      <div style={chcekStyle} className="orderConP moreInfo">
        <p>Thank you for going through the checkout process.</p>
        <br></br>
        <p>Where this a real checkout you might be informed that you have received an email with your receipt and order confirmation</p>
        <p>and that all the necessary information about the trip could be found there.</p>
      </div>
      <Button style={chcekStyle} onClick={CloseWindow} type="reset" variant="contained" color="primary">
        Continue
</Button>
    </div>

  )
}