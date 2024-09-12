import { useState } from 'react'
import './TestCounter.css'
export default function TestCounter ({amount}) {

  const [count, setCount] = useState (amount);

  const handleClickSuma = ()=> {
    setCount (count + 1);
  }
  const handleClickResta = ()=> {
    setCount (count - 1);
  }

    return (
      <>
      <p>{count}</p>
      <section className='d-flex justify-content-center'>
      <button className='button' onClick={handleClickResta}>-</button>
      <button className='button' onClick={handleClickSuma}>+</button>
      </section>
      </>
    )
  }