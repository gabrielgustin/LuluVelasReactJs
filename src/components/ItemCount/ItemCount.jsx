import { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import './ItemCount.css'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(prev => prev + 1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(prev => prev - 1)
        }     
    }
 
    return(
        <div className='Counter'>          
             <div className='Controls'>
                 <Buttons className="Button" onClick={decrement}>-</Buttons>
                 <h4 className='Number'>{quantity}</h4>
                 <Buttons className="Button" onClick={increment}>+</Buttons>
             </div>
             <div>
                 <Buttons className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</Buttons>
             </div>
        </div>
    )
 
 }
 export default ItemCount