import './LoginScreen.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginScreen = () => {
    const [val, setVal] = useState({
        email: '', pwd: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setVal({...val, [name]: value});
        console.log(val.email);
    }

    const validationForm = () => {
        let returnData = {
          error: false,
          msg:'',
        }
        const {email, pwd} = val;
        const vaild = /\S+@\S+\.\S+/;
        if (!vaild.test(email)) {
          returnData = {
            error: true,
            msg: 'Invail Email',
          }
        }
        if (pwd.length < 8) {
          returnData = {
            error: true,
            msg: 'Pwd must be greater than 8 characters'
          }
        }
        return returnData;
    }

    const onSubmit = e => {
        e.preventDefault();
        const validation = validationForm();
        if (validation.error) {
            alert(validation.msg);
        } else {
            alert('Success!');
        }
    }

    return (
        <div className='login'>
            <form onSubmit={onSubmit} className='login__form'>
                <h2>LOGIN</h2>
                <input 
                    id='email'
                    type='text'
                    name='email'
                    className='login__form-user'
                    placeholder='Email'
                    onChange={handleChange}
                />
                <input 
                    id='pwd'
                    type='password'
                    name='pwd'
                    className='login__form-user'
                    placeholder='Password'
                    onChange={handleChange}
                />
                <button type='submit'>Access</button>
            </form>
            <div className='login__info'>
                <div className='login__info-box'>
                    <label>Type Account</label>
                    <span>
                        <p><input type='radio' name='account'/>Business</p>
                        <p><input type='radio' name='account'/>Consumer</p>
                        <p>{val.email}</p>
                    </span>
                </div>
                <div className='login__info-box'>
                    <label>What do you prefer</label>
                    <span>
                        <p><input type='checkbox' name='prefer'/>Technology</p>
                        <p><input type='checkbox' name='prefer'/>Beauty</p>
                        <p><input type='checkbox' name='prefer'/>Women Clothes</p>
                        <p><input type='checkbox' name='prefer'/>Men Clothes</p>
                        <p><input type='checkbox' name='prefer'/>Health</p>
                        <p><input type='checkbox' name='prefer'/>Pets</p>
                        <p><input type='checkbox' name='prefer'/>Foods</p>
                    </span>
                </div>
                <div className='login__info-box'>
                    <label>Full Name</label>
                    <span><input type='text'/></span>
                </div>
                <div className='login__info-box'>
                    <label>Email</label>
                    <span><input type='email'/></span>
                </div>
                <div className='login__info-box'>
                    <label>Address</label>
                    <span><input type='text'/></span>
                </div>
                <div className='login__info-box'>
                    <label>Phone Number</label>
                    <span><input type='number'/></span>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
