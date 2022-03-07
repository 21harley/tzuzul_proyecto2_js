import Data from "../class/Data.js";
import Jugador from "../class/Jugador.js";
import Moneda from "../class/Moneda.js";
import View from "../class/View.js";

class Juego extends View{
    //declaro atributos
    #moneda;
    #jugador1;
    #jugador2;

    constructor(){
        //cargar datos de localStore
        super();
        let jugadors=[Data.loadData("Jugador1"),Data.loadData("Jugador2")];
        this.#moneda=new Moneda();//retorne el turno;
        this.#jugador1=new Jugador(jugadors[0][0][1],0,this.#moneda.getTurno(1),jugadors[0][1][1],jugadors[0][2][1]);
        this.#jugador2=new Jugador(jugadors[1][0][1],0,this.#moneda.getTurno(2),jugadors[1][1][1],jugadors[1][2][1]);
    }

    view(){
        return(
            `
            <div class="view view_Juego"> 
            ${this.#moneda.view_Moneda()} 
            ${this.#jugador1.colocarFicha()}         
            ${this.#jugador2.colocarFicha()}         
            </div>
            `
        )
    }

    event(){
        this.#moneda.event_moneda();
        let view_Juego=document.querySelector(".view_Juego");
        
        view_Juego.addEventListener("click",(e)=>{
            console.log(e);
            console.log(this.#jugador1,this.#jugador2);
            //if(e.target.matches(this.#botonHome.G_Id)){
                //guardo Datos
                //Rutas.cambioRuta("Home");
           //}
        })  
    }
}

export default Juego;
