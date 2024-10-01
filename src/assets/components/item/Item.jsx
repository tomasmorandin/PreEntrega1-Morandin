import './Item.css'
import { Link } from 'react-router-dom'


export default function Item({product}) {
    return (
      <>
      <article className="text-center article">
        <div className='card'>
      <img className="card-img-top" src={product.image} alt={product.title} />
                    <div className="card-body">
                    <h4 className="card-text1">{product.title}</h4>
                    <p className="card-text2">Precio:${product.price}</p>
                    <button className="btn">
                      <Link to={`/pila/${product.id}`}>Mas detalles</Link>
                    </button>
                    </div>
                    </div>
      </article>
      </>
    )
  }