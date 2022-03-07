import Div from "../component/Div.js";
import Data from "./Data.js";

class Moneda{
    #container;
    #jugador1;
    #jugador2;

    constructor(){
        let datos=[Data.loadData("Jugador1"),Data.loadData("Jugador2")];
        this.#jugador1=new Div(`${datos[0][0][1]}`,"giro","giro","giro","");
        this.#jugador2=new Div(`${datos[1][0][1]}`,"giro1","giro1","giro1","");
        this.#container=new Div(`
              ${this.#jugador1.crearDiv()}
              ${this.#jugador2.crearDiv()}
        `,"container_giro","c_giro","container_giro","");
    }

    view_Moneda(){
       return(
           `
           ${this.#container.crearDiv()}
           `
       )
    }

    event_moneda(){
        document.querySelector(this.#jugador1.P_Clase).style.zIndex="1";
        document.querySelector(this.#jugador2.P_Clase).style.zIndex="-1";

        let contador=0;
        const ganador=4;
        console.log("Holaaa :v")
        const cambio=setInterval(()=>{
            
            let moneda=document.querySelector(this.#jugador1.P_Clase);
            let moneda1=document.querySelector(this.#jugador2.P_Clase);
            //console.log(moneda.style)
            moneda.style.zIndex=(moneda.style.zIndex=="1")?'-1':'1';
            //style.transform=trasitionX
            moneda1.style.zIndex=(moneda1.style.zIndex=="1")?'-1':'1';
            contador++;
            if(contador>ganador){
                clearInterval(cambio);
                //mostrar boton continuar
            }

        },1000,contador,ganador)
    }
}

export default Moneda;

/*
por hacer animacion moneda
        render.innerHTML=`
        <div class="container_giro">
            <div class="giro">Carlos</div>
            <div class="giro1">Pedro</div>
        </div>
        `;

 

*/
