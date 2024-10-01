import { useEffect } from "react";
import {useState} from 'react'
import { getPilas } from "../../../../asyncMock";
import ItemPila from "../../item/ItemPila";


export default function ItemListPilas() {
  
    const [products, setProducts]=useState([]);

    useEffect(()=> {
        getPilas.then(data=> setProducts(data))
    },[]);

    return (
      <>
     <section>
        {products.map(product=><ItemPila key={product.id} product={product}/>)}
     </section>
      </>
    )
  }