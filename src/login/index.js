import {Link} from "react-router-dom";

function loginUser(){

    const username = document.getElementById("usernameLoginField").value
    const password = document.getElementById("passwordLoginField").value
    console.log(username)
    console.log(password)
    console.log("loginUser() reached")


}

const LoginComponent = () => {
    return (

        <div>

            <h2>Login</h2>

            <input id={"usernameLoginField"}
                className={"form-control"}
                placeholder={"username"}
            />

            <input id={"passwordLoginField"}
                className={"form-control"}
                placeholder={"password"}
            />

            <button className={"register-button"} onClick={loginUser}>Login</button>

            <p></p>

            <h7>Don't have an account? <Link to={"/register"}>Register here</Link> </h7>






        </div>
    );
};

export default LoginComponent;