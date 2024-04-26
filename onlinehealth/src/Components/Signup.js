import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                email,
                password,
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                // Use history.push instead of Link to navigate
                history("/", { state: { id: email } });
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="login-container" style={{ marginTop: "100px" }}>
            <h1>Student SignUp</h1>

            <form className="login-form" onSubmit={submit}>
                <input
                    type="Uername"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    placeholder="Username"
                />
                <input
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password"
                />
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>

            <div className="or-divider">
                <p>OR</p>
            </div>

            <Link to="/login">
                <button className="btn">Login</button>
            </Link>
        </div>
    );
}

export default Signup;
