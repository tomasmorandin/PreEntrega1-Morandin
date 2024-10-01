import { useEffect } from "react";
import {useState} from 'react'
import { getControles } from "../../../../asyncMock";
import ItemControl from "../../item/ItemControl";



export default function ItemListControles() {
  
    const [products, setProducts]=useState([]);

    useEffect(()=> {
        getControles.then(data=> setProducts(data))
    },[]);

    return (
      <>
     <section>
        {products.map(product=><ItemControl key={product.id} product={product}/>)}
     </section>
      </>
    )
  }