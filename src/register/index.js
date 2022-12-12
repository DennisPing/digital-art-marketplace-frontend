import {Link} from "react-router-dom";
import "./index.css"



const user = {

    username: "",
    password: ""

}

function register(user){

    console.log("user registered")


}



function registerHandler(){

    const username = document.getElementById("usernameField").value
    const password = document.getElementById("passwordField").value
    user.username = username
    user.password = password

    console.log(user)

    console.log("registerUser() reached")

    register(user)


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

            <button className={"register-button"} onClick={registerHandler} >Register</button>

            <p></p>

            <h7>Already have an account? <Link to={"/login"}>Login here</Link></h7>






        </div>
    );
};

export default RegisterComponent;