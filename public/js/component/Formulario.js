import Componente from "../class/Componente";

class Formulario extends Componente{

    constructor(text_des="",id="",name="",clase="",otrosAtributos=""){
        super(text_des,id,name,clase,otrosAtributos); 
    }

    crearFormulario(){
        return `
        <form ${this.id_class_name} ${this.OtroAtributos}>
            ${this.text_des}
        </form>
        `;
    }
    
}

export default Formulario;