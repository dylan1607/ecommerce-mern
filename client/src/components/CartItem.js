import './CartItem.css'
import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        <div className='cartitem'>
            <div className='cartitem__image'>
                <img src='https://images.unsplash.com/photo-1518118014377-ce94f3eae7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1579&q=80' alt='product' />
            </div>
            <Link to={`/product/${111}`} className='cartitem__name'>
                <p>Product 1</p>
            </Link>
            <p className='cartitem__price'>$599.99</p>

            <select className='cartitem__select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
            <button className='cartitem__deletebtn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
