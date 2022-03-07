import Rutas from "../class/Rutas.js";
import View from "../class/View.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Cm_Jugar extends View{
    //declaro atributos
    #titulo;
    #botonHome;

    constructor(){
        //cargar datos de localStore
        //crear componentes 
        super();
        this.#titulo= new Titulo("¿Como Jugar?","","","titulo",1,"");
        this.#botonHome=new Boton("volver Home","boton_home","","boot","");
    }

    view(){
        return(
            `
            <div class="view view_Cm_Jugar"> 
              ${this.#titulo.crearTitulo()}
              ${this.#botonHome.crearBoton()}          
            </div>
            `
        )
    }

    event(){
        let view_Cm_Jugar=document.querySelector(".view_Cm_Jugar");
        
        view_Cm_Jugar.addEventListener("click",(e)=>{
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

export default Cm_Jugar;
