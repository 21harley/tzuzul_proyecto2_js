class Pieza{
    //atributos
    #url;
    #color;
    #turnoJugador;

    constructor(url="",color="",turnoJugador=-1){
        this.#url=url;
        this.#color=color;
        this.#turnoJugador=turnoJugador;
    }

    //metodos
    modificarColor(){
        //cambio de propiedad root jugador?1:2 con js por this.
    }

    crearPieza(){
        return(
            `
              <div class="container jugador-${this.#turnoJugador}">
                 <img src="${this.#url}" class="pieza">
              </div>
            `
        )
    }

   //get y set
    set Url(url=""){
        this.#url=url;
    }
    
    set Color(color=""){
        this.#color=color;
    }

    set TurnoJugador(turnoJugador=-1){
        this.#turnoJugador=turnoJugador;
    }

    get Url(){
        return this.#url;
    }
    get Color(){
        return this.#color;
    }
    get TurnoJugador(){
        return this.#turnoJugador;
    }
}

export default Pieza;
