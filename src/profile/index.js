import "./index.css"

// notes for showing the subscribe/unsubscribe button, depending on user type
//// {tuit.liked && <i onClick={() => dislikeTuitHandler(tuit)} className="bi bi-heart-fill text-danger"></i> }
//   {!tuit.liked && <i onClick={() => likeTuitHandler(tuit)} className="bi bi-heart"></i> }

// test edit



const ProfileComponent = () => {



    function openUsernameForm() {

        document.getElementById("username_form").style.display = "block";
        document.getElementById("edit-username-button").style.display = "none";

    }

    function closeUsernameForm() {
        document.getElementById("username_form").style.display = "none";
        document.getElementById("edit-username-button").style.display = "block";

        document.getElementById("current_username").innerHTML = document.getElementById("new_username").value
        document.getElementById("current_username2").innerHTML = document.getElementById("new_username").value


    }

    function openFirstNameForm() {

        document.getElementById("firstname_form").style.display = "block";
        document.getElementById("edit-firstname-button").style.display = "none";

    }

    function closeFirstNameForm() {
        document.getElementById("firstname_form").style.display = "none";
        document.getElementById("edit-firstname-button").style.display = "block";

        document.getElementById("current_firstname").innerHTML = document.getElementById("new_firstname").value


    }

    function openLastNameForm() {

        document.getElementById("lastname_form").style.display = "block";
        document.getElementById("edit-lastname-button").style.display = "none";

    }

    function closeLastNameForm() {
        document.getElementById("lastname_form").style.display = "none";
        document.getElementById("edit-lastname-button").style.display = "block";

        document.getElementById("current_lastname").innerHTML = document.getElementById("new_lastname").value


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

    function DeleteAccountPopUp() {

        document.getElementById("account_form").style.display = "block";
        document.getElementById("delete_account_button").style.display = "none";

    }

    function closeDeleteAccountPopUp() {

        document.getElementById("account_form").style.display = "none";
        document.getElementById("delete_account_button").style.display = "block";

    }

    function subscribe() {

        document.getElementById("subscribe").style.backgroundColor="grey";
        document.getElementById("subscribe").innerHTML = "Subscribed"


    }


    return (


    <div>

        <div className={"user-avatar-block"}>

            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor"
                 className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>

            <p id="current_username"> Current username</p>

            <p></p>

            <button id={"subscribe"} className={"subscribe-button"} onClick={subscribe}>Subscribe</button>



            <p></p>

            <button className={"delete_account_button"} id={"delete_account_button"} onClick={DeleteAccountPopUp}>Delete Account</button>

            <div className={"editing_form"} id={"account_form"} >

                Delete account?

                <button type="button" className="delete_account_button" onClick={closeDeleteAccountPopUp}>Yes, delete account</button>
                <button type="button" className="save-button" onClick={closeDeleteAccountPopUp}>Cancel</button>

            </div>

        </div>



        <div className={"user-info-block"}>
        <h4>Account Information</h4>

        <h5>Username</h5>
        <p id="current_username2"> Current username</p>

        <div className={"editing_form"} id={"username_form"} >

            <form>

                <label htmlFor="username"><b>Username</b></label>
                <input id="new_username" type="text" placeholder="Enter Username"  ></input>


            </form>

            <button type="button" className="save-button" onClick={closeUsernameForm}>Save</button>

        </div>
      <button className="open-button" id={"edit-username-button"} onClick={openUsernameForm}>Edit</button>

            <h5>First Name</h5>
            <p id="current_firstname"> Current first name</p>

            <div className={"editing_form"} id={"firstname_form"} >

                <form>

                    <label htmlFor="firstname"><b>First name</b></label>
                    <input id="new_firstname" type="text" placeholder="Enter first name"  ></input>


                </form>

                <button type="button" className="save-button" onClick={closeFirstNameForm}>Save</button>

            </div>
            <button className="open-button" id={"edit-firstname-button"} onClick={openFirstNameForm}>Edit</button>

            <h5>Last Name</h5>
            <p id="current_lastname"> Current Last Name</p>

            <div className={"editing_form"} id={"lastname_form"} >

                <form>

                    <label htmlFor="lastname"><b>Last Name</b></label>
                    <input id="new_lastname" type="text" placeholder="Enter last name"  ></input>


                </form>

                <button type="button" className="save-button" onClick={closeLastNameForm}>Save</button>

            </div>
            <button className="open-button" id={"edit-lastname-button"} onClick={openLastNameForm}>Edit</button>


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

        <p></p>


        </div>

    </div>








  );

};


export default ProfileComponent;

