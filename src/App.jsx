import './App.css'
import NavBar from './assets/components/navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PilasView from './assets/components/views/pilas/PilasView'
import BateriasView from './assets/components/views/baterias/BateriasView'
import ControlesView from './assets/components/views/controles/ControlesView'
import ItemDetailPila from './assets/components/views/pilas/ItemDetailPila'
import ItemDetailControl from './assets/components/views/controles/ItemDetailControl'
import ItemDetailBateria from './assets/components/views/baterias/ItemDetailBateria'
import HomeView from './assets/components/views/home/HomeView'
import Footer from './assets/components/footer/footer'


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes >
      <Route exact path='/' element={<HomeView/>}/>
      <Route exact path='/category/pilas' element={<PilasView/>}/>
      <Route exact path='/category/baterias' element={<BateriasView/>}/>
      <Route exact path='/category/controles' element={<ControlesView/>}/>
      <Route exact path='/category/pilas/:id' element={<ItemDetailPila/>}/>
      <Route exact path='/category/baterias/:id' element={<ItemDetailBateria/>}/>
      <Route exact path='/category/controles/:id' element={<ItemDetailControl/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
