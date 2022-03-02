class Jugador{
    //atributos
    #nombre;
    #puntos;
    #turno;
    #colorPieza;

    constructor(nombre="",puntos=0,turno=0,colorPieza=""){
        this.#nombre=nombre;
        this.#puntos=puntos;
        this.#turno=turno;
        this.#colorPieza=colorPieza;
    }
    
    //metodos
    sumarPuntos(){
        this.Puntos+=1;
    }
    
    //set y get
    set Nombre(nombre=""){
        this.#nombre=nombre;
    }

    set Puntos(puntos=0){
        this.#puntos=puntos;
    }

    set Turno(turno=0){
        this.#turno=turno;
    }

    set ColorPieza(colorPieza=""){
        this.#colorPieza=colorPieza;
    }

    get Nombre(){
        return this.#nombre;
    }
    
    get Turno(){
        return this.#turno;
    }
    
    get Puntos(){
        return this.#puntos;
    }

    get ColorPieza(){
        return this.#colorPieza;
    }

}

export default Jugador;