import Titulo from "../component/Titulo.js";
import Formulario from "../component/Formulario.js";
import Boton from "../Component/Boton.js";
import Input from "../component/Input.js";

class Registro{
    
    #titulo;
    #formulario;
    #botonRegistrar;
    
    constructor(){
        this.#titulo= new Titulo("Regristro jugador 1","titulo_registro","","titulo_registro","");
        this.#formulario= new Formulario(`
                                          ${new Input("","nombre_registro","registro","input_text","text","required","").crearInput()}
                                          ${new Input("","color_registro","registro","input_text","color","required","").crearInput()}
                                          ${new Input("","select_registro","registro","input_text","text","required","").crearInput()}
                                         `,
                        "formulario_registro1","","formulario_registro","");
        this.#botonRegistrar=new Boton("Registrar","boton_registro","","boot","");
    }

    view_registro(){
        return(
            `
            <div class="view view_Registro">
               ${this.#titulo.crearTitulo()}
               ${this.#formulario.crearFormulario()}
               ${this.#botonRegistrar.crearBoton()}
            </div>
            `
        )
    }

    event_registro(){
        let view_registro=document.querySelector(".view_Registro");
        
        view_registro.addEventListener("click",(e)=>{
            console.log(e);
        })  
    }
}

export default Registro;