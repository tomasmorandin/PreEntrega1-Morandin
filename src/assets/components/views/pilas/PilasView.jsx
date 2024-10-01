import ItemListContainer from "../../item_list_container/ItemListContainer";
import ItemListPilas from "./ItemListPilas";

export default function PilasView (){
    return(<>
 
    <ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'>
    <img src="src\assets\img\web_SLIDE 3.jpg"  alt="" width='350px'/>
      <ItemListPilas/>
      </ItemListContainer>
    </>)
}