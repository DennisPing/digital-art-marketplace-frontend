import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserThunk } from "../services/users/user-thunks";

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

const RegisterComponent = () => {
  let user = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const [newUser, setUser] = useState(user); // hook

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerHandler = async () => {
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
      await dispatch(createUserThunk(newUser)).unwrap();
      setSuccess(true);
      // Wait 2 seconds before redirecting to /login
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch {
      setSuccess(false);
    }
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
        <h1 className="fw-bold text-center py-4">Register</h1>
        <div className="list-group-item">
          {success === true && (
            <div className="alert alert-success text-center">
              <p className="m-0">
                Succesfully registered
                <br />
                Redirecting to log in page...
              </p>
            </div>
          )}
          {success === false && <div className="alert alert-danger text-center">Username already exists</div>}
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
            <button className="btn btn-primary btn-lg rounded-pill" onClick={registerHandler}>
              Register
            </button>
          </div>
        </div>

        <h6 className="text-center">
          Already have an account? <Link to={"/login"}>Login here</Link>{" "}
        </h6>
      </div>
    </div>
  );
};

// function registerHandler() {
//   const username = document.getElementById("usernameField").value;
//   const password = document.getElementById("passwordField").value;
//   const firstName = document.getElementById("firstNameField").value;
//   const lastName = document.getElementById("lastNameField").value;
//   const email = document.getElementById("emailField").value;
//   const phone = document.getElementById("phoneField").value;
//   user.username = username;
//   user.password = password;
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.phone = phone;

//   console.log(user);

//   console.log("registerUser() reached");

//   createUser(user);
// }

// const RegisterComponent = () => {
//   return (
//     <div>
//       <h2>Register</h2>

//       <input id={"usernameField"} className={"form-control"} placeholder={"username"} />

//       <input id={"passwordField"} className={"form-control"} placeholder={"password"} />

//       <input id={"firstNameField"} className={"form-control"} placeholder={"first name"} />

//       <input id={"lastNameField"} className={"form-control"} placeholder={"last name"} />

//       <input id={"emailField"} className={"form-control"} placeholder={"email"} />

//       <input id={"phoneField"} className={"form-control"} placeholder={"phone"} />

//       <button className={"register-button"} onClick={registerHandler}>
//         Register
//       </button>

//       <p></p>

//       <h7>
//         Already have an account? <Link to={"/login"}>Login here</Link>
//       </h7>
//     </div>
//   );
// };

export default RegisterComponent;
