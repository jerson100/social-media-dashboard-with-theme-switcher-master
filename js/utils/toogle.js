import { setModeLocalStorage } from "./color_mode.js";

export const toogleMode = (element,oyente,style) =>{

    let el = document.querySelector(element);
    let oy = document.querySelector(oyente);

    let modeInitial = localStorage.getItem("mode");

    if(modeInitial  == 'dark'){
        oy.classList.add(style);
        setModeLocalStorage("dark");
    }else{
        setModeLocalStorage("light");
    }

    if(el && oy){
        el.addEventListener('click',()=>{
            oy.classList.toggle(style);
            if(!oy.classList.contains(style)){
                setModeLocalStorage("light");
            }else{
                setModeLocalStorage("dark");
            }
        });
    }

};