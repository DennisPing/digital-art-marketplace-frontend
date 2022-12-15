import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const RegisterComponent = () => {
  // First, hold the profile data from the state
  const { user } = useSelector((state) => state.user);
  // Then, modify the currProfile object
  const [currUser, setUser] = useState(user); // hook

  const dispatch = useDispatch();
  const updateProfileHandler = () => {
    // Check if currUser has all 6 fields filled out
    if (
      !currUser.username ||
      !currUser.password ||
      !currUser.firstName ||
      !currUser.lastName ||
      !currUser.email ||
      !currUser.phone
    ) {
      alert("Please fill out all fields.");
      return;
    }
    dispatch(createUserThunk(currUser));
  };

  // Show password toggler
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h1 className="fw-bold text-center py-4">Register</h1>
      <div className="list-group-item w-25 m-auto">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="usernameField"
            placeholder="Username"
            value={currUser.username}
            maxLength={64}
            onChange={(e) => setUser({ ...currUser, username: e.target.value })}
          />
          <label htmlFor="usernameField">Username</label>
        </div>
        <div className="form-floating my-3">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control position-relative"
            id="passwordField1"
            placeholder="Password"
            value={currUser.password}
            maxLength={64}
            onChange={(e) => setUser({ ...currUser, password: e.target.value })}
          />
          <label htmlFor="passwordField1">Password</label>
          <i
            type="button"
            class={`${
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
            value={currUser.firstName}
            maxLength={64}
            onChange={(e) => setUser({ ...currUser, firstName: e.target.value })}
          />
          <label htmlFor="firstNameField">First Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="lastNameField"
            placeholder="Last Name"
            value={currUser.lastName}
            maxLength={64}
            onChange={(e) => setUser({ ...currUser, lastName: e.target.value })}
          />
          <label htmlFor="lastNameField">Last Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="emailField"
            placeholder="Email Address"
            value={currUser.email}
            maxLength={64}
            onChange={(e) => setUser({ ...currUser, email: e.target.value })}
          />
          <label htmlFor="emailField">Email Address</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="phoneField"
            placeholder="Phone Number"
            value={currUser.phone}
            maxLength={64}
            onChange={(e) => setUser({ ...currUser, phone: FormatPhoneNumber(e.target.value) })}
          />
          <label htmlFor="phoneField">Phone Number</label>
        </div>
        <div className="wd-register-btn py-4">
          <button className="btn btn-primary btn-lg rounded-pill" onClick={updateProfileHandler}>
            Register
          </button>
        </div>
      </div>

      <h6 className="text-center">
        Already have an account? <Link to={"/login"}>Login here</Link>{" "}
      </h6>
    </>
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
