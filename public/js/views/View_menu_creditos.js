import Rutas from "../class/Rutas.js";
import Boton from "../Component/Boton.js";

class Creditos{
    
    #botonHome;
    
    constructor(){
        //cargar Datos localStore
        this.#botonHome=new Boton("Home",'home_boton','home_boton',"boot","");
    }

    view_creditos(){
        return(
            `
            <div class="view view_Creditos">
                ${this.#botonHome.crearBoton()}            
            </div>
            `
        )
    }

    event_creditos(){
        let view_creditos=document.querySelector(".view_Creditos");
        
        view_creditos.addEventListener("click",(e)=>{
            console.log(e);
            if(e.target.matches(this.#botonHome.G_Id)){
                //guardo Datos
                Rutas.cambioRuta("Home");
            }
        })  
    }

}

export default Creditos;