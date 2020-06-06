import { toogleMode } from "./utils/toogle.js";

((window,document,undefinied)=>{

    document.addEventListener('DOMContentLoaded',e=>{

        toogleMode("#social-media__radio","#social-media__radio .social-media__radio-button" ,"social-media__radio-button--active");

    });

})(window,document);