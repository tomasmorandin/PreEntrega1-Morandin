import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getBateria } from "../../../../asyncMock";
import '../pilas/ItemDetailPila.css'


export default function ItemDetailBateria() {

    const [product, setProduct]= useState({})
  
    const {id} = useParams()
  
    useEffect(()=>{
      setProduct(getBateria(id))
    },[]);
  
      return (
        <>
        {<article className="container-fluid">
    <div className="row">
        <div className="col-lg-6">
          <img src={product.image} alt={product.title}/>
        </div>
        <div class="col-lg-6 description">
              <h4 className="card-text1">{product.title}</h4>
              <h4 className="card-text1">Precio:${product.price}</h4>
              <p className="card-text2">Categoria:{product.type}</p>
              <p className="card-text2">Marca:{product.brand}</p>
              <p className="card-text2">Stock:{product.stock}</p>
              <p className="card-text2">Descripcion:{product.description}</p>
              <NavLink className="btn">Comprar</NavLink>
        </div>
    </div>
</article>}
        </>
      )
    };