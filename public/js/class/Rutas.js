import Home from "../views/View_menu_home.js";
import Registro from "../views/View_menu_registro.js";
import Controles from "../views/View_menu_controles.js";
import Cm_Jugar from "../views/View_menu_cm_jugar.js";
/*import Ranking from "../views/view_menu_ranking.js";*/
import Creditos from "../views/View_menu_creditos.js";
import Juego from "../views/View_menu_Juego.js";

class Rutas{

    static cambioRuta(ruta=""){

        const render=document.querySelector(".root");

        let transicion=setTimeout(()=>{
            switch(ruta){
                
                case "Home":
                    const home= new Home();
                    render.innerHTML=home.view_home();
                    home.event_home();
                break;
         
                case "Registro":
                    const registro=new Registro();
                    render.innerHTML=registro.view_registro();
                    registro.event_registro();
                break;
                
                case "Juego":
                    const juego=new Juego();
                    render.innerHTML=juego.view_Juego();
                    juego.event_Juego();
                break;    

                case "Controles":
                    const controles=new Controles();
                    render.innerHTML=controles.view_Controles();
                    controles.event_Controles();
                break;

                case "Cm_jugar":
                    const cmJugar=new Cm_Jugar();
                    render.innerHTML=cmJugar.view_Cm_Jugar();
                    cmJugar.event_Cm_Jugar();
                break;

                case "Creditos":
                    const creditos= new Creditos();   
                    render.innerHTML=creditos.view_creditos();
                    creditos.event_creditos();
                break;
            }

            clearTimeout(transicion);
        },700,ruta,render)
        
   }
}

export default Rutas;


