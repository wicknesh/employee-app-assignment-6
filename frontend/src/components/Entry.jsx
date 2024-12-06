import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Entry = () => {

    const navigate = useNavigate();
    const [signUpFormData, setSignUpFormData] = useState ({
        InputNameSignup: '',
        InputUserNameSignup: '',
        InputEmailSignup: '',
        InputPasswordSignup: ''
    })

    const [loginFormData, setLoginFormData] = useState ({
        InputEmailLogin: '',
        InputPasswordLogin: ''
    })

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginFormData({...loginFormData, [name]: value})
    }

    const handleChangeSignup = (e) => {
        const { name, value } = e.target;
        setSignUpFormData({...signUpFormData, [name]: value});
    }

    const apiURL = import.meta.env.VITE_EMP_API;

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiURL}/users/login/`, loginFormData);
            sessionStorage.setItem('userToken', response.data.token)
            navigate('/home');
        } catch (error) {
            console.log(error);   
        }
    }

    const handleSubmitSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiURL}/users/signup/`, signUpFormData);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-6 p-5">
                <form onSubmit={handleSubmitLogin}>
                    <h1>Hello,</h1>
                    <h1>welcome back!</h1>

                    <input
                        type="text"
                        className="mt-5 form-control p-3 border-input"
                        id="InputEmailLogin"
                        name="InputEmailLogin"
                        value={loginFormData.InputEmailLogin}
                        onChange={handleChangeLogin}
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        className="mt-5 form-control p-3 border-input"
                        id="InputPasswordLogin"
                        name="InputPasswordLogin"
                        value={loginFormData.InputPasswordLogin}
                        onChange={handleChangeLogin}
                        placeholder="Password"
                    />

                    <button
                        type="submit"
                        className="btn btn-lg w-100 mt-5 btn-primary"
                    >
                        Login
                    </button>
                </form>
            </div>
            <div className="col-md-6 p-5">
                <form onSubmit={handleSubmitSignup}>
                    <h1>New here?,</h1>
                    <h1>Sign up!</h1>

                    <input
                        type="text"
                        className="mt-5 form-control p-3 border-input"
                        id="InputNameSignup"
                        name="InputNameSignup"
                        value={signUpFormData.InputNameSignup}
                        onChange={handleChangeSignup}
                        placeholder="Name"
                    />

                    <input
                        type="text"
                        className="mt-3 form-control p-3 border-input"
                        id="InputUserNameSignup"
                        name="InputUserNameSignup"
                        value={signUpFormData.InputUserNameSignup}
                        onChange={handleChangeSignup}
                        placeholder="Username"
                    />

                    <input
                        type="text"
                        className="mt-3 form-control p-3 border-input"
                        id="InputEmailSignup"
                        name="InputEmailSignup"
                        value={signUpFormData.InputEmailSignup}
                        onChange={handleChangeSignup}
                        placeholder="Email address"
                    />

                    <input
                        type="password"
                        className="mt-3 form-control p-3 border-input"
                        id="InputPasswordSignup"
                        name="InputPasswordSignup"
                        value={signUpFormData.InputPasswordSignup}
                        onChange={handleChangeSignup}
                        placeholder="Password"
                    />

                    <button
                        type="submit"
                        className="btn btn-lg w-100 mt-5 btn-success"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Entry;