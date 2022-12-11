import {Link} from "react-router-dom";

const LoginComponent = () => {
    return (

        <div>

            <h2>Login</h2>

            <input
                className={"form-control"}
                placeholder={"username"}
            />

            <input
                className={"form-control"}
                placeholder={"password"}
            />

            <h7>Don't have an account? <Link to={"/register"}>Register here</Link> </h7>






        </div>
    );
};

export default LoginComponent;