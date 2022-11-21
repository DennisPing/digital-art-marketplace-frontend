import "./index.css"




const ProfileComponent = () => {




    function openAddressForm() {

        document.getElementById("address_form").style.display = "block";
        document.getElementById("edit-address-button").style.display = "none";

    }

    function closeAddressForm() {
        document.getElementById("address_form").style.display = "none";
        document.getElementById("edit-address-button").style.display = "block";

        document.getElementById("current_address").innerHTML = document.getElementById("new_address").value


    }

    function openEmailForm() {

        document.getElementById("email_form").style.display = "block";
        document.getElementById("edit-email-button").style.display = "none";

    }

    function closeEmailForm() {
        document.getElementById("email_form").style.display = "none";
        document.getElementById("edit-email-button").style.display = "block";

        document.getElementById("current_email").innerHTML = document.getElementById("new_email").value



    }

    function openPhoneForm() {

        document.getElementById("phone_form").style.display = "block";
        document.getElementById("edit-phone-button").style.display = "none";

    }

    function closePhoneForm() {
        document.getElementById("phone_form").style.display = "none";
        document.getElementById("edit-phone-button").style.display = "block";

        document.getElementById("current_phone").innerHTML = document.getElementById("new_phone").value



    }

    return (


    <div>





      <h1>My Profile</h1>

        <h4>Account Information</h4>

        <h5>Address</h5>
        <p id="current_address"> Current address</p>

        <div className={"editing_form"} id={"address_form"} >

            <form>

                <label htmlFor="address"><b>Address</b></label>
                <input id="new_address" type="text" placeholder="Enter Address"  ></input>


            </form>

            <button type="button" className="save-button" onClick={closeAddressForm}>Save</button>

        </div>
      <button className="open-button" id={"edit-address-button"} onClick={openAddressForm}>Edit</button>


        <h5>Email</h5>
        <p id="current_email"> Current email</p>

        <div className={"editing_form"} id={"email_form"} >

            <form>

                <label htmlFor="email"><b>Email</b></label>
                <input id="new_email" type="text" placeholder="Enter Email"  ></input>


            </form>

            <button type="button" className="save-button" onClick={closeEmailForm}>Save</button>

        </div>
        <button className="open-button" id={"edit-email-button"} onClick={openEmailForm}>Edit</button>

        <h5>Phone</h5>
        <p id="current_phone"> Current phone</p>

        <div className={"editing_form"} id={"phone_form"} >

            <form>

                <label htmlFor="phone"><b>Phone</b></label>
                <input id="new_phone" type="text" placeholder="Enter Phone"  ></input>


            </form>

            <button type="button" className="save-button" onClick={closePhoneForm}>Save</button>

        </div>
        <button className="open-button" id={"edit-phone-button"} onClick={openPhoneForm}>Edit</button>

    </div>






  );
};

export default ProfileComponent;
