import Ruta from "../function/Rutas.js";
import Boton from "../Component/Boton.js";

class Home{
    //atributos
    #credito;
    #credito1;

    constructor(){
        //recuperar datos 
        this.#credito=new Boton("Creditos",'btn_creditos','btn_creditos','hola');
        this.#credito1=new Boton("Creditos",'btn_creditos_1','btn_creditos_1','boot');
    }

    view_home(){
        return(
            `<div class="view_Home">
               ${this.#credito.crearBoton()}
               ${this.#credito1.crearBoton()}
            </div>`
        )
    }
    
    event_home(){
        let view_home=document.querySelector(".view_Home");
        //llamar eventos de otras vista 
        view_home.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#credito.G_Id)){
                //gurdar Datos localstore o archivo
                Ruta("Creditos");
            }
            if(e.target.matches(this.#credito1.G_Id)){
                console.log("Hola mundo");
            }
        })  
    }

}

export default Home;