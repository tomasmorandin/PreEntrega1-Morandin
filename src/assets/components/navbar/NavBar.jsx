import './NavBar.css'
import CartWidget from '../cart_widget/CartWidget'
import Brand from './Brand'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
      <>
      <nav className="navbar navbar-expand-md navbar-dark">
  <div className="container-fluid">
    <Brand/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav mx-auto">
      <li className="nav-item">
         <NavLink to={'/category/pilas'} className="nav-link mx-4">Pilas</NavLink>
         </li>
      <li className="nav-item">
         <NavLink to={'/category/baterias'} className="nav-link mx-4">Baterias</NavLink>
         </li>
      <li className="nav-item">
         <NavLink to={'/category/controles'} className="nav-link mx-4">Controles</NavLink>
         </li>
      </ul>
      <CartWidget valor={0}/>
    </div>
  </div>
</nav>
      </>
    )
  }

//   const productos =[
//     {id: 1,
//         nombre: 'remera',
//     },
//     {id: 2,
//         nombre: 'pantalon',
//     },
//     {id: 2,
//         nombre: 'pantalon',
//     },
// ];

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve (productos);
//     }, 2000);
// })

// promesa
// .then( result=> console.log(productos))
// .catch(error=> console.log ('error'))
// .finally(()=> console.log('Todo Termino'))
