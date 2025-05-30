import React,{ useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Constructing the request body
        const requestBody = {
            email,
            password
        };

    try {
        // Making the REST call
        const response = await fetch('http://localhost:8081/auth/login', {
            method: 'POST', // Change the method according to your API
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
            });

            // Handling the response
            console.log(response.status);
            console.log(response);
            if (response.ok) {
            // Handle success scenario
                const message = await response.json();
                const { jwtToken } = message;
                // Store JWT token in a cookie
                Cookies.set('jwtToken', jwtToken, { expires: 7 }); // Expires in 7 days

                // Optionally, store username
                Cookies.set('username', message.username, { expires: 7 });
                console.log(jwtToken);
                console.log('Login successful, token stored in cookies');
                // window.location.replace('/home');
            } else {
            // Handle error scenario
                var container = document.querySelector(".container");
                container.style.display = "block";
                var inputElements = document.querySelectorAll("input");
                inputElements.forEach(function(inputElement) {
                    inputElement.style.border = "2px solid rgba(255, 0, 0, .9)"; // Update border property for each input
                });
                setEmail('');
                setPassword('')
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder='Useremail' 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder='Password' 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type='checkbox' />Remember me</label>
                    <Link to='http://localhost:3000/forgotPassword'>Forgot Password</Link>
                </div>
                <button type="submit">Login</button>
                <p className="container">Invalid Credential, Please try again</p>
                <div className="register-link">
                    <p>Don't have an account? <Link to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
