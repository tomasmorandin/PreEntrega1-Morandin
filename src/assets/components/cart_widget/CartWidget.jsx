import './CartWidget.css'

export default function CartWidget({valor}) {
  return (
      <>
      <div>
        <a href=""><i className="fa-solid fa-cart-shopping text-white cart-item"></i></a>
        <span className='mx-2'>{valor}</span>
        </div>
      </>
    )
}