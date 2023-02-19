import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = (props)=>{
    return (
        <div className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
        </div>
    )
}

export default CartWidget;