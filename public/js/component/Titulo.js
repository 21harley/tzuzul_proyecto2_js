import Componente from "../class/Componente.js";

class Titulo extends Componente{
   
    constructor(text_des="",id="",name="",clase=""){
        super(text_des,id,name,clase); 
    }

    crearTitulo(){
        return(
            `
            <h1 ${this.id_class_name}>
                ${this.Text_des}
            </h1>
            `
        )
    }
}

export default Titulo;