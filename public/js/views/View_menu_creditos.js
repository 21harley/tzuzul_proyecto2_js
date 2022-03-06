import Rutas from "../class/Rutas.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Creditos{
    #titulo;
    #botonHome;
    
    constructor(){
        //cargar Datos localStore
        this.#titulo= new Titulo("Creditos","","","titulo",1,"");
        this.#botonHome=new Boton("volver Home",'home_boton','home_boton',"boot","");
    }

    view_creditos(){
        return(
            `
            <div class="view view_Creditos">
                ${this.#titulo.crearTitulo()}
                ${this.#botonHome.crearBoton()}            
            </div>
            `
        )
    }

    event_creditos(){
        let view_creditos=document.querySelector(".view_Creditos");
        
        view_creditos.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#botonHome.G_Id)){
                //guardo Datos
                Rutas.cambioRuta("Home");
            }
        })  
    }

}

export default Creditos;