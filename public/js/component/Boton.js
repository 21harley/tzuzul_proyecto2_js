import Componente from "../class/Componente.js";

class Boton extends Componente{

    constructor(text_des="",id="",name="",clase=""){
       super(text_des,id,name,clase); 
    }

    crearBoton(){
        
        return(
            `
            <button ${this.id_class_name}>
                  ${this.Text_des}
            </button>
            `
        )
    }

}

export default Boton;