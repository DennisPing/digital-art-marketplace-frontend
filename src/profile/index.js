import "./index.css"




const ProfileComponent = () => {

    const current_address = document.getElementById("current_address");
    const new_address_const = document.getElementById("new_address");

    function openForm() {

        document.getElementById("address_form").style.display = "block";
        document.getElementById("edit-address-button").style.display = "none";

    }

    function closeForm() {
        document.getElementById("address_form").style.display = "none";
        document.getElementById("edit-address-button").style.display = "block";

        current_address.textContent = new_address_const.value

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

            <button type="button" className="save-button" onClick={closeForm}>Save</button>

        </div>
      <button className="open-button" id={"edit-address-button"} onClick={openForm}>Edit</button>


        <h5>Email</h5>
        User's current email appears here
        <button type="button" >Edit</button>
        <h5>Phone</h5>
        User's current phone appears here
        <button type="button">Edit</button>

        <button type="button">Delete Account</button>


    </div>






  );
};

export default ProfileComponent;
