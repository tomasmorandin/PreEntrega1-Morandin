import TestCounter from "../../count/TestCounter";
import ItemListContainer from "../../item_list_container/ItemListContainer";
import ItemListBaterias from "../baterias/ItemListBaterias";
import ItemListControles from "../controles/ItemListControles";
import ItemListPilas from "../pilas/ItemListPilas";

export default function HomeView (){
    return(<>
    <ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'>
      <img src="src\assets\img\web_SLIDE 3.jpg"  alt="" width='50%' className='img'/>
      <TestCounter amount={0} min={0} max={10}/>
      <ItemListPilas/>
      <ItemListBaterias/>
      <ItemListControles/>
      </ItemListContainer>
    </>)
}