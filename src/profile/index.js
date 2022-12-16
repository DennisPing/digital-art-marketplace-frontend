import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";

import { updateUserThunk } from "../services/users/user-thunks";

import "./index.css";

// Tutorial: https://www.youtube.com/watch?v=MqJzsDC1N0U
const FormatPhoneNumber = (value) => {
  if (!value) {
    return value;
  }
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) {
    return phoneNumber;
  }
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

// Tutorial: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const ValidateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const AlertComponent = ({ success, message }) => {
  let alertStyle = "";
  if (success === true) {
    alertStyle = "alert alert-success text-center";
  } else {
    alertStyle = "alert alert-danger text-center";
  }
  return (
    <>
      <div className={alertStyle}>
        <p className="m-0">{message}</p>
      </div>
    </>
  );
};

const ProfileComponent = () => {
  const { user } = useSelector((state) => state.user);
  const [newUser, setUser] = useState(user); // hook

  const dispatch = useDispatch();
  const updateUserHandler = async () => {
    // Check if newUser has all 6 fields filled out
    if (
      !newUser.username ||
      !newUser.password ||
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.email ||
      !newUser.phone
    ) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      await dispatch(updateUserThunk(newUser)).unwrap();
      setSuccess(true);
    } catch {
      setSuccess(false);
    }
  };

  const [subscribed, setSubscribed] = useState(null);
  const subscribePremiumHandler = async () => {
    try {
      await dispatch(updateUserThunk({ ...user, userType: "premium" })).unwrap();
      setSubscribed(true);
    } catch {
      setSubscribed(false);
    }
  };

  const unsubscribePremiumHandler = async () => {
    try {
      await dispatch(updateUserThunk({ ...user, userType: "free" })).unwrap();
      setSubscribed(false);
    } catch {
      setSubscribed(true);
    }
  };

  const navigate = useNavigate();
  const deleteUserHandler = () => {
    navigate("/profile/delete");
  };

  // Validate email inside newUser
  const [emailValid, setEmailValid] = useState(true);
  const validateEmailHandler = () => {
    if (newUser.email.length > 0) {
      setEmailValid(ValidateEmail(newUser.email));
    } else {
      setEmailValid(true);
    }
  };

  // Show password toggler
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Success message
  const [success, setSuccess] = useState(null);

  return (
    <div className="row">
      <div className="col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4 mx-auto">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="fw-bold d-inline-block py-4">{`Hello ${Capitalize(user.firstName)}`}</h1>
          {user.userType === "premium" ? (
            <i className="bx bx-lg bx-badge-check text-primary ms-2" data-tip data-for="premiumIcon" />
          ) : (
            ""
          )}
          {user.userType === "admin" ? (
            <i className="bx bx-lg bx-crown text-primary ms-2" data-tip data-for="adminIcon" />
          ) : (
            ""
          )}
          <ReactTooltip id="premiumIcon" place="top">
            Premium User
          </ReactTooltip>
          <ReactTooltip id="adminIcon" place="top">
            Admin User
          </ReactTooltip>
        </div>
        <div className="list-group-item">
          {success === true && <AlertComponent success={success} message="Profile updated successfully" />}
          {success === false && <AlertComponent success={success} message="Unable to update profile" />}
          {subscribed === true && <AlertComponent success={subscribed} message="Subscribed to premium" />}
          {subscribed === false && <AlertComponent success={subscribed} message="Unsubscribed from premium" />}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="usernameField"
              placeholder="Username"
              value={newUser.username}
              maxLength={64}
              onChange={(e) => setUser({ ...newUser, username: e.target.value })}
            />
            <label htmlFor="usernameField">Username</label>
          </div>
          <div className="form-floating my-3">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control position-relative"
              id="passwordField"
              placeholder="Password"
              value={newUser.password}
              maxLength={64}
              onChange={(e) => setUser({ ...newUser, password: e.target.value })}
            />
            <label htmlFor="passwordField">Password</label>
            <i
              type="button"
              className={`${
                showPassword ? "bx bxs-show" : "bx bxs-hide"
              } text-secondary bx-sm position-absolute wd-visibility`}
              onClick={handlePasswordToggle}
            />
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="firstNameField"
              placeholder="First Name"
              value={newUser.firstName}
              maxLength={64}
              onChange={(e) => setUser({ ...newUser, firstName: e.target.value })}
            />
            <label htmlFor="firstNameField">First Name</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="lastNameField"
              placeholder="Last Name"
              value={newUser.lastName}
              maxLength={64}
              onChange={(e) => setUser({ ...newUser, lastName: e.target.value })}
            />
            <label htmlFor="lastNameField">Last Name</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="email"
              className={`form-control ${emailValid ? "" : "is-invalid"}`}
              id="emailField"
              placeholder="Email Address"
              value={newUser.email}
              maxLength={64}
              onChange={(e) => {
                setUser({ ...newUser, email: e.target.value });
              }}
              onBlur={validateEmailHandler}
            />
            <label htmlFor="emailField">Email Address</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="phoneField"
              placeholder="Phone Number"
              value={newUser.phone}
              maxLength={64}
              onChange={(e) => setUser({ ...newUser, phone: FormatPhoneNumber(e.target.value) })}
            />
            <label htmlFor="phoneField">Phone Number</label>
          </div>
          <div className="wd-register-btn py-4">
            <button className="btn btn-primary btn-lg rounded-pill" onClick={updateUserHandler}>
              Update Profile
            </button>
          </div>

          <h1 className="fw-bold text-center pt-3 border-top">Premium Membership</h1>
          <h5 className="text-secondary text-center">Get exclusive access to VIP art collections</h5>
          {subscribed === false || subscribed === null ? (
            <div className="wd-register-btn py-4">
              <button className="btn btn-success btn-lg rounded-pill" onClick={subscribePremiumHandler}>
                Subscribe to Premium
              </button>
            </div>
          ) : (
            <div className="wd-register-btn py-4">
              <button className="btn btn-warning btn-lg rounded-pill" onClick={unsubscribePremiumHandler}>
                Unsubscribe from Premium
              </button>
            </div>
          )}

          <h1 className="fw-bold text-center pt-3 border-top">Delete Account</h1>
          <h5 className="text-secondary text-center">Delete your account and all your data</h5>
          <div className="wd-register-btn py-4">
            <button className="btn btn-danger btn-lg rounded-pill" onClick={deleteUserHandler}>
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const ProfileComponent = () => {
//   function openUsernameForm() {
//     document.getElementById("username_form").style.display = "block";
//     document.getElementById("edit-username-button").style.display = "none";
//   }

//   function closeUsernameForm() {
//     document.getElementById("username_form").style.display = "none";
//     document.getElementById("edit-username-button").style.display = "block";

//     document.getElementById("current_username").innerHTML = document.getElementById("new_username").value;
//     document.getElementById("current_username2").innerHTML = document.getElementById("new_username").value;
//   }

//   function openFirstNameForm() {
//     document.getElementById("firstname_form").style.display = "block";
//     document.getElementById("edit-firstname-button").style.display = "none";
//   }

//   function closeFirstNameForm() {
//     document.getElementById("firstname_form").style.display = "none";
//     document.getElementById("edit-firstname-button").style.display = "block";

//     document.getElementById("current_firstname").innerHTML = document.getElementById("new_firstname").value;
//   }

//   function openLastNameForm() {
//     document.getElementById("lastname_form").style.display = "block";
//     document.getElementById("edit-lastname-button").style.display = "none";
//   }

//   function closeLastNameForm() {
//     document.getElementById("lastname_form").style.display = "none";
//     document.getElementById("edit-lastname-button").style.display = "block";

//     document.getElementById("current_lastname").innerHTML = document.getElementById("new_lastname").value;
//   }

//   function openEmailForm() {
//     document.getElementById("email_form").style.display = "block";
//     document.getElementById("edit-email-button").style.display = "none";
//   }

//   function closeEmailForm() {
//     document.getElementById("email_form").style.display = "none";
//     document.getElementById("edit-email-button").style.display = "block";

//     document.getElementById("current_email").innerHTML = document.getElementById("new_email").value;
//   }

//   function openPhoneForm() {
//     document.getElementById("phone_form").style.display = "block";
//     document.getElementById("edit-phone-button").style.display = "none";
//   }

//   function closePhoneForm() {
//     document.getElementById("phone_form").style.display = "none";
//     document.getElementById("edit-phone-button").style.display = "block";

//     document.getElementById("current_phone").innerHTML = document.getElementById("new_phone").value;
//   }

//   function DeleteAccountPopUp() {
//     document.getElementById("account_form").style.display = "block";
//     document.getElementById("delete_account_button").style.display = "none";
//   }

//   function closeDeleteAccountPopUp() {
//     document.getElementById("account_form").style.display = "none";
//     document.getElementById("delete_account_button").style.display = "block";
//   }

//   function subscribe() {
//     document.getElementById("subscribe").style.backgroundColor = "grey";
//     document.getElementById("subscribe").innerHTML = "Subscribed";
//   }

//   return (
//     <div>
//       <div className={"user-avatar-block"}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="200"
//           height="200"
//           fill="currentColor"
//           className="bi bi-person-circle"
//           viewBox="0 0 16 16"
//         >
//           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//           <path
//             fill-rule="evenodd"
//             d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
//           />
//         </svg>

//         <p id="current_username"> Current username</p>

//         <p></p>

//         <button id={"subscribe"} className={"subscribe-button"} onClick={subscribe}>
//           Subscribe
//         </button>

//         <p></p>

//         <button className={"delete_account_button"} id={"delete_account_button"} onClick={DeleteAccountPopUp}>
//           Delete Account
//         </button>

//         <div className={"editing_form"} id={"account_form"}>
//           Delete account?
//           <button type="button" className="delete_account_button" onClick={closeDeleteAccountPopUp}>
//             Yes, delete account
//           </button>
//           <button type="button" className="save-button" onClick={closeDeleteAccountPopUp}>
//             Cancel
//           </button>
//         </div>
//       </div>

//       <div className={"user-info-block"}>
//         <h4>Account Information</h4>

//         <h5>Username</h5>
//         <p id="current_username2"> Current username</p>

//         <div className={"editing_form"} id={"username_form"}>
//           <form>
//             <label htmlFor="username">
//               <b>Username</b>
//             </label>
//             <input id="new_username" type="text" placeholder="Enter Username"></input>
//           </form>

//           <button type="button" className="save-button" onClick={closeUsernameForm}>
//             Save
//           </button>
//         </div>
//         <button className="open-button" id={"edit-username-button"} onClick={openUsernameForm}>
//           Edit
//         </button>

//         <h5>First Name</h5>
//         <p id="current_firstname"> Current first name</p>

//         <div className={"editing_form"} id={"firstname_form"}>
//           <form>
//             <label htmlFor="firstname">
//               <b>First name</b>
//             </label>
//             <input id="new_firstname" type="text" placeholder="Enter first name"></input>
//           </form>

//           <button type="button" className="save-button" onClick={closeFirstNameForm}>
//             Save
//           </button>
//         </div>
//         <button className="open-button" id={"edit-firstname-button"} onClick={openFirstNameForm}>
//           Edit
//         </button>

//         <h5>Last Name</h5>
//         <p id="current_lastname"> Current Last Name</p>

//         <div className={"editing_form"} id={"lastname_form"}>
//           <form>
//             <label htmlFor="lastname">
//               <b>Last Name</b>
//             </label>
//             <input id="new_lastname" type="text" placeholder="Enter last name"></input>
//           </form>

//           <button type="button" className="save-button" onClick={closeLastNameForm}>
//             Save
//           </button>
//         </div>
//         <button className="open-button" id={"edit-lastname-button"} onClick={openLastNameForm}>
//           Edit
//         </button>

//         <h5>Email</h5>
//         <p id="current_email"> Current email</p>

//         <div className={"editing_form"} id={"email_form"}>
//           <form>
//             <label htmlFor="email">
//               <b>Email</b>
//             </label>
//             <input id="new_email" type="text" placeholder="Enter Email"></input>
//           </form>

//           <button type="button" className="save-button" onClick={closeEmailForm}>
//             Save
//           </button>
//         </div>
//         <button className="open-button" id={"edit-email-button"} onClick={openEmailForm}>
//           Edit
//         </button>

//         <h5>Phone</h5>
//         <p id="current_phone"> Current phone</p>

//         <div className={"editing_form"} id={"phone_form"}>
//           <form>
//             <label htmlFor="phone">
//               <b>Phone</b>
//             </label>
//             <input id="new_phone" type="text" placeholder="Enter Phone"></input>
//           </form>

//           <button type="button" className="save-button" onClick={closePhoneForm}>
//             Save
//           </button>
//         </div>
//         <button className="open-button" id={"edit-phone-button"} onClick={openPhoneForm}>
//           Edit
//         </button>
//       </div>
//     </div>
//   );
// };

export default ProfileComponent;
