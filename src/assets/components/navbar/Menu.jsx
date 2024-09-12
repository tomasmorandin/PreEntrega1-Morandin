import './NavBar.css'
export default function Menu({title}) {
    return (
      <>
      <li className="nav-item">
        <a className="nav-link mx-4" href="#">{title}</a>
        </li>
      </>
    )
  }