import './Register.css'
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div className='register'>
            <h2>REGISTER</h2>
            <form className='register__form'>
                <input 
                    id='email'
                    type='text'
                    name='email'
                    placeholder='Email'
                />
                <input 
                    id='pwd'
                    type='password'
                    name='pwd'
                    placeholder='Password'
                />
                <input 
                    id='pwd-rep'
                    type='password'
                    name='pwd-rep'
                    placeholder='Repeat Password'
                />
                <div className='register__form--btn'>
                    <button type='submit'>Register</button>
                    <Link to='/login'>
                        Login
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register
