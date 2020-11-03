import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const CartItems = (props) => {
 return (
  <>
         <tr>
         <td className="product-remove"><Link to="/#"><i><AiFillDelete/></i></Link>
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
