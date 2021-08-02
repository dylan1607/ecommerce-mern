import './LoginScreen.css';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

const LoginScreen = () => {
    return (
        <div className='screen'>
            <Login />
            <div className='login__info'>
                <div className='login__info-box'>
                    <label>Type Account</label>
                    <span>
                        <p><input type='radio' name='account'/>Business</p>
                        <p><input type='radio' name='account'/>Consumer</p>
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
