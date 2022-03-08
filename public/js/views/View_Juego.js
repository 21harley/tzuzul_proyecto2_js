import Data from "../class/Data.js";
import Jugador from "../class/Jugador.js";
import Moneda from "../class/Moneda.js";
import View from "../class/View.js";
import Tablero from "../class/Tablero.js";
import Rutas from "../class/Rutas.js";

class Juego extends View{
    //declaro atributos
    #moneda;
    #jugador1;
    #jugador2;
    #tablero;

    constructor(){
        //cargar datos de localStore
        super();
        let jugadors=[Data.loadData("Jugador1"),Data.loadData("Jugador2")];
        this.#moneda=new Moneda();//retorne el turno;
        this.#jugador1=new Jugador(jugadors[0][0][1],0,this.#moneda.getTurno(1),jugadors[0][1][1],jugadors[0][2][1]);
        this.#jugador2=new Jugador(jugadors[1][0][1],0,this.#moneda.getTurno(2),jugadors[1][1][1],jugadors[1][2][1]);
        this.#tablero=new Tablero([this.#jugador1,this.#jugador2]);
    }

    view(){
        return(
            `
            <div class="view view_Juego"> 
            ${this.#moneda.view()}      
            </div>
            `
        )
    }

    event(){
        this.#moneda.event();
    
        let view_Juego=document.querySelector(".view_Juego");
        
        let eliminarMoneda=setInterval(()=>{

          document.querySelector(this.#moneda.Container.G_Id).remove();
          
          //creao Tablero
          view_Juego.innerHTML=this.#tablero.view();
          this.#tablero.event()

          clearInterval(eliminarMoneda);

        },this.#moneda.getTimer()+1000);
        
        view_Juego.addEventListener("click",(e)=>{
            if(e.target.matches(this.#tablero.Reiniciar)){
                Rutas.cambioRuta("Juego");
            }
            if(e.target.matches(this.#tablero.Volver)){
                Data.clear();  
                Rutas.cambioRuta("Home");
            }
        })
    }
}

export default Juego;
