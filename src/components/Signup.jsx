import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    async function signUp(e) {
        e.preventDefault();

        try {
            const res = await axios({
                url: '/api/signup',
                method: "POST",
                data: {
                    userName,
                    password,
                    email,
                    phone,
                }
            })

            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }

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
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <button onClick={signUp}>Sign up</button>
        </div>
    );
}

export default Signup;
