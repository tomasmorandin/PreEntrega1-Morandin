import './App.css'
import NavBar from './assets/components/navbar/NavBar'
import ItemListContainer from './assets/components/item_list_container/ItemListContainer'
import TestCounter from './assets/components/count/TestCounter'


function App() {

  return (
    <>
    <header>
      <NavBar/>
    </header>
    <main>
    <ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'/>
    <TestCounter amount={0}/>
    </main>
    <footer></footer>
    </>
  )
}

export default App
