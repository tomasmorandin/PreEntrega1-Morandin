import ItemListContainer from "../../item_list_container/ItemListContainer";
import ItemListControles from "./ItemListControles";

export default function ControlesView (){
    return(<>
        <ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'>
      <img src="src\assets\img\web_SLIDE 3.jpg"  alt="" width='350px' className='img'/>
      <ItemListControles/>
      </ItemListContainer>
    </>)
}