import Home from "../views/View_menu_home.js";
import Creditos from "../views/View_menu_creditos.js";

export default function Ruta(ruta=""){
    
    const render=document.querySelector(".root");

   switch(ruta){
       
       case "Home":
        const home= new Home();
        render.innerHTML=home.view_home();
        home.event_home();
       break;

       case "Creditos":
        const creditos= new Creditos();   
        render.innerHTML=creditos.view_creditos();
        creditos.event_creditos();
       break;
   }
}


