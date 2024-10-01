import { useEffect } from "react";
import {useState} from 'react'
import { getBaterias } from "../../../../asyncMock";
import ItemBateria from "../../item/ItemBateria";


export default function ItemListBaterias() {
  
    const [products, setProducts]=useState([]);

    useEffect(()=> {
        getBaterias.then(data=> setProducts(data))
    },[]);

    return (
      <>
     <section>
        {products.map(product=><ItemBateria key={product.id} product={product}/>)}
     </section>
      </>
    )
  }