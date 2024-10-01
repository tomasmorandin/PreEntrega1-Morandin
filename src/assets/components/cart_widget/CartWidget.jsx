import { NavLink } from 'react-router-dom'
import './CartWidget.css'

export default function CartWidget({valor}) {
  return (
      <>
      <div>
        <NavLink href=""><i className="fa-solid fa-cart-shopping cart-item"></i></NavLink>
        <span className='mx-2'>{valor}</span>
        </div>
      </>
    )
}