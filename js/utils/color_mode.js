export const setModeLocalStorage = (mode) => {
    localStorage.setItem("mode",mode);
    if(!document.body.classList.contains(`mode-${mode}`)){
        document.body.setAttribute("class",`mode-${mode}`);
    }
};

export const getModeLocalStorage = () => {
    return localStorage.getItem("mode");
};