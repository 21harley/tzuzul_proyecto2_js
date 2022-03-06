import Home from "../views/View_menu_home.js";
import Registro from "../views/View_menu_registro.js";
import Controles from "../views/View_menu_controles.js";
import Cm_Jugar from "../views/View_menu_cm_jugar.js";
import Ranking from "../views/view_menu_ranking.js";
import Creditos from "../views/View_menu_creditos.js";

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

                case "Ranking":
                    const ranking=new Ranking();
                    render.innerHTML=ranking.view_Ranking();
                    ranking.event_Ranking();
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

/*
por hacer animacion moneda




        render.innerHTML=`
        <div class="container_giro">
            <div class="giro">Carlos</div>
            <div class="giro1">Pedro</div>
        </div>
        `;

        document.querySelector(".giro").style.zIndex="1";
        document.querySelector(".giro1").style.zIndex="-1";

        let contador=0;
        const ganador=4;
        const cambio=setInterval(()=>{
            
            let moneda=document.querySelector(".giro");
            let moneda1=document.querySelector(".giro1");
            console.log(moneda.style)
            moneda.style.zIndex=(moneda.style.zIndex=="1")?'-1':'1';
            //style.transform=trasitionX
            moneda1.style.zIndex=(moneda1.style.zIndex=="1")?'-1':'1';
            contador++;
            if(contador>ganador){
                clearInterval(cambio);
                //mostrar boton continuar
            }

        },1000,contador,ganador)

*/

