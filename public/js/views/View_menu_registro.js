import Titulo from "../component/Titulo.js";
import Formulario from "../component/Formulario.js";
import Boton from "../Component/Boton.js";
import Input from "../component/Input.js";
import Rutas from "../class/Rutas.js";
import Select from "../component/Select.js";

class Registro{
    
    #titulo;
    #formulario;
    #botonRegistrar;
    #volverHome;
    
    constructor(){
        this.#titulo= new Titulo("Regristro jugador","titulo_registro","","titulo",1,"");
        this.#botonRegistrar=new Boton("Registrar","boton_registro","","boot","");
        this.#formulario= new Formulario(`
        Nombre:${(new Input("","nombre_registro","registro","input_text","text",`required`,`placeholder="Nombre..."`)).crearInput()}
        Color:${(new Input("","color_registro","registro","input","color",`required`,"")).crearInput()}
        Ficha:${(
             new Select("","","select_ficha","input_select","","",[{value:"Bomba"},{value:"Estrella"},{value:"Rayo"}],true)
        ).crearSelect()}
        ${this.#botonRegistrar.crearBoton()}`
        ,"formulario_registro1",``,"formulario_registro",``);
        this.#volverHome=new Boton("Volver Home","volver_home","","boot","");
    }

    view_registro(){
        return(
            `
            <div class="view view_Registro">
               ${this.#titulo.crearTitulo()}
               ${this.#formulario.crearFormulario()}
               ${this.#volverHome.crearBoton()}
            </div>
            `
        )
    }

    event_registro(){
        let view_registro=document.querySelector(".view_Registro");

        view_registro.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#botonRegistrar.G_Id)){
                e.preventDefault();
                let aux=new FormData(document.getElementById(this.#formulario.Id));
                console.log([...aux.entries()])
            }
            if(e.target.matches(this.#volverHome.G_Id)){
                Rutas.cambioRuta("Home");
            }
        })  
    }
}

export default Registro;