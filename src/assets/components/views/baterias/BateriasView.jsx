import ItemListContainer from "../../item_list_container/ItemListContainer";
import ItemListBaterias from "./ItemListBaterias";

export default function BateriasView (){
    return(<>

    <ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'>
      <img src="src\assets\img\web_SLIDE 3.jpg"  alt="" width='350px' className='img'/>
      <ItemListBaterias/>
      </ItemListContainer>
    </>)
}