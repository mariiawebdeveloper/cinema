import React, {useState} from 'react';
import {signIn} from "next-auth/react";

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />


            <button onClick={() => signIn('credentials', {userName, password})}>
                Log in
            </button>
        </div>
    );
}

export default Login;