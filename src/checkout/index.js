

const CheckoutComponent = () => {


    function submit_order() {

        document.getElementById("submit-order-button").style.backgroundColor="grey";
        document.getElementById("submit-order-button").innerHTML = "Submitted"


    }

    return (
        <div>
            <h1>Checkout</h1>




            <h5>Payment Method</h5>
            <div>



                <p> &#128179; *********0000</p>
                <p>Exp: 3/27</p>
                <p>user name on card</p>
            </div>

            <h5>Order Summary</h5>
            user's items

            <p></p>



            <button className={'checkout-button'} id={"submit-order-button"} onClick={submit_order}>Submit Order</button>
        </div>
    );
};

export default CheckoutComponent;