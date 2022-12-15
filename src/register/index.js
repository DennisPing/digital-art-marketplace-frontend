import { Link } from "react-router-dom";
import "./index.css";
import { createUser } from "../services/users/user-service";

const user = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function registerHandler() {
  const username = document.getElementById("usernameField").value;
  const password = document.getElementById("passwordField").value;
  const firstName = document.getElementById("firstNameField").value;
  const lastName = document.getElementById("lastNameField").value;
  const email = document.getElementById("emailField").value;
  const phone = document.getElementById("phoneField").value;
  user.username = username;
  user.password = password;
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.phone = phone;

  console.log(user);

  console.log("registerUser() reached");

  createUser(user);
}

const RegisterComponent = () => {
  return (
    <div>
      <h2>Register</h2>

      <input id={"usernameField"} className={"form-control"} placeholder={"username"} />

      <input id={"passwordField"} className={"form-control"} placeholder={"password"} />

      <input id={"firstNameField"} className={"form-control"} placeholder={"first name"} />

      <input id={"lastNameField"} className={"form-control"} placeholder={"last name"} />

      <input id={"emailField"} className={"form-control"} placeholder={"email"} />

      <input id={"phoneField"} className={"form-control"} placeholder={"phone"} />

      <button className={"register-button"} onClick={registerHandler}>
        Register
      </button>

      <p></p>

      <h7>
        Already have an account? <Link to={"/login"}>Login here</Link>
      </h7>
    </div>
  );
};

export default RegisterComponent;
