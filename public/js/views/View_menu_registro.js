import Titulo from "../component/Titulo.js";
import Formulario from "../component/Formulario.js";
import Boton from "../Component/Boton.js";
import Input from "../component/Input.js";
import Rutas from "../class/Rutas.js";

class Registro{
    
    #titulo;
    #formulario;
    #botonRegistrar;
    #volverHome;
    
    constructor(){
        this.#titulo= new Titulo("Regristro jugador 1","titulo_registro","","titulo",1,"");
        this.#formulario= new Formulario(`
        Nombre:${(new Input("","nombre_registro","registro","input_text","text",`required`,`placeholder="Nombre..."`)).crearInput()}
        Color:${(new Input("","color_registro","registro","input_text","color",`required`,"")).crearInput()}
        Ficha:${(new Input("","select_registro","registro","input_text","text",`required`,"")).crearInput()}
        `
        ,"formulario_registro1",``,"formulario_registro",``);
        this.#botonRegistrar=new Boton("Registrar","boton_registro","","boot","");
        this.#volverHome=new Boton("Volver Home","volver_home","","boot","");
    }

    view_registro(){
        return(
            `
            <div class="view view_Registro">
               ${this.#titulo.crearTitulo()}
               ${this.#formulario.crearFormulario()}
               ${this.#botonRegistrar.crearBoton()}
               ${this.#volverHome.crearBoton()}
            </div>
            `
        )
    }

    event_registro(){
        let view_registro=document.querySelector(".view_Registro");

        view_registro.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#volverHome.G_Id)){
                Rutas.cambioRuta("Home");
            }
        })  
    }
}

export default Registro;