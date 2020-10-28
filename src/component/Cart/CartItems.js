import React from 'react'
import { AiFillDelete } from 'react-icons/ai';

const CartItems = (props) => {
 return (
  <>
         <tr>
         <td className="product-remove"><a href="#"><i><AiFillDelete/></i></a>
         </td>
         <td className="product-thumb">
      
         <img src={props.img} alt="img" />
         
         </td>
         <td className="product-name">{props.name}
         </td>
         <td className="product-price">£{props.price}</td>
         <td className="product-quantity">
         <label>{props.quantity}</label>
         <input min="1" max="100" type="number" />
         </td>
         <td className="product-total">£{props.total}</td>
         </tr>
  </>
 )
}

export default CartItems
