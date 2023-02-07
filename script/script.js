function popupInit(){   
    //POPUP EMAIL  
    const btn = document.getElementById('email');
    const container = document.querySelector('.popup');
    const emailClose = document.querySelector('.email-close');

    function abrirModal(event){
        event.preventDefault();
        container.classList.add('popup-ativo');
    }

    function fecharModal(event){
        event.preventDefault();
        container.classList.remove('popup-ativo');
    }

    function foradoModal(event){
        if(event.target === this)
        fecharModal(event);
    }

    btn.addEventListener('click', abrirModal);
    emailClose.addEventListener('click', fecharModal);
    container.addEventListener('click', foradoModal);
        
 }

popupInit();


function escritaInit(){

 //EFEITO ESCRITA
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';

    textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 105 * i)
  });
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

}

escritaInit();


function initTab(){
    const web = document.getElementById('web');
    const photoshop = document.getElementById('photoshop');
    const afterEffects = document.getElementById('aftereffects');

    const webP = document.getElementById('projetos-web');
    const photoshopP = document.getElementById('projetos-photoshop');
    const afterEffectsP = document.getElementById('projetos-afterEffects');


    webP.style.display = "flex";
    web.style.color = "#00D2DF";
    web.style.borderBottom = "1px solid #00D2DF";
    

    function activeWeb(){
        webP.style.display = "flex";
        if(webP.style.display = "flex"){
            photoshopP.style.display = "none"
            photoshopP.style.display = "none"
            afterEffectsP.style.display = "none"
            web.style.color = "#00D2DF";
            web.style.borderBottom = "1px solid #00D2DF";
            photoshop.style.color = "white";
            photoshop.style.borderBottom = "none";
            afterEffects.style.color = "white";
            afterEffects.style.borderBottom = "none";
        }
    }

    function activePhotoshop(){
        photoshopP.style.display = "flex";
        if(photoshopP.style.display = "flex"){
            webP.style.display = "none"
            afterEffectsP.style.display = "none"
            web.style.color = "white";
            web.style.borderBottom = "none";
            photoshop.style.color = "#00D2DF";
            photoshop.style.borderBottom = "1px solid #00D2DF";
            afterEffects.style.color = "white";
            afterEffects.style.borderBottom = "none";
        }
    }

    function activeAfter(){
        afterEffectsP.style.display = "flex";
        if(afterEffectsP.style.display = "flex"){
            webP.style.display = "none"
            photoshopP.style.display = "none"
            web.style.color = "white";
            web.style.borderBottom = "none";
            photoshop.style.color = "white";
            photoshop.style.borderBottom = "none";
            afterEffects.style.color = "#00D2DF";
            afterEffects.style.borderBottom = "1px solid #00D2DF";
        }
    }

       web.addEventListener('click', activeWeb);
       photoshop.addEventListener('click', activePhotoshop);
       afterEffects.addEventListener('click', activeAfter);

}
initTab();