import './NavBar.css'
import CartWidget from '../cart_widget/CartWidget'
import Menu from './Menu'
import Brand from './Brand'

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
        <Menu title='Pilas'/>
        <Menu title='Baterias'/>
        <Menu title='Controles'/>
      </ul>
      <CartWidget valor={0}/>
    </div>
  </div>
</nav>
      </>
    )
  }

  
