class Tablero{
    #url;
    #numeroPieza;
    #ganador;
    #matriz;

    constructor(url=""){
        this.#url=url;
        this.#numeroPieza=0;
        this.#ganador=false;
        this.#matriz=null;
    }

    set Url(url=""){
        this.#url=url;
    }
    
    get Url(){
        return this.#url;
    }

    get NumeroPieza(){
        return this.#numeroPieza;
    }

    get Ganador(){
        return this.#ganador;
    }

    get Matriz(){
        return this.#matriz;
    }

}

export default Tablero;