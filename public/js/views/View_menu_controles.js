import Rutas from "../class/Rutas.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Controles{
    //declaro atributos
    #titulo;
    #botonHome;

    constructor(){
        //cargar datos de localStore
        //crear componentes 
        this.#titulo= new Titulo("Controles","titulo","","titulo",1,"");
        this.#botonHome=new Boton("volver Home",'home_boton','home_boton',"boot","");
    }

    view_Controles(){
        return(
            `
            <div class="view view_Controles"> 
               ${this.#titulo.crearTitulo()}
               ${this.#botonHome.crearBoton()} 
            </div>
            `
        )
    }

    event_Controles(){
        let view_Controles=document.querySelector(".view_Controles");
        
        view_Controles.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#botonHome.G_Id)){
                Rutas.cambioRuta("Home");
            }
            //if(e.target.matches(this.#botonHome.G_Id)){
                //guardo Datos
                //Rutas.cambioRuta("Home");
           //}
        })  
    }
}

export default Controles;
