import {Link} from "react-router-dom";
import "./index.css"







function registerUser(){

    const username = document.getElementById("usernameField").value
    const password = document.getElementById("passwordField").value
    console.log(username)
    console.log(password)
    console.log("registerUser() reached")


}

const RegisterComponent = () => {
    return (


        <div>

            <h2>Register</h2>

            <input id={"usernameField"}

                className={"form-control"}
                placeholder={"username"}
            />

            <input id={"passwordField"}

                className={"form-control"}
                placeholder={"password"}
            />

            <button className={"register-button"} onClick={registerUser} >Register</button>

            <p></p>

            <h7>Already have an account? <Link to={"/login"}>Login here</Link></h7>






        </div>
    );
};

export default RegisterComponent;