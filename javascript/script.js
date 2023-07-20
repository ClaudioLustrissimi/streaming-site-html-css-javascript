document.addEventListener("DOMContentLoaded",function(){

    setTimeout(mostra,2000);
    
    chiudi();

    aggiungiZoom();

    //VARIABILE DEI FILM

    const breakingbad = document.getElementById("serieuno") 
    const videouno = document.getElementById("breakingbad")

    const dark = document.getElementById("seriedue")
    const videodue = document.getElementById("dark")

    const mind = document.getElementById("serietre") 
    const videotre = document.getElementById("mind")

    const avatar = document.getElementById("seriequattro") 
    const videoquattro = document.getElementById("avatar")

    const ironman = document.getElementById("seriecinque") 
    const videocinque = document.getElementById("ironman")

    
    serietv(breakingbad,videouno);

    serietv(dark,videodue);

    serietv(mind,videotre);

    serietv(avatar,videoquattro);

    serietv(ironman,videocinque);
   

    
     //FUNZIONE PER MENU REG
    let menuRegister = document.getElementById("aprireg")
    let ApriReg = document.getElementById("registrazione")
    menuReg(menuRegister, ApriReg);

    //FUNZIONE PER ABBONAMENTI
    pulsanteAbbonamenti(ApriReg);


    chiudire();
});//FINE DOMContentLoaded



//FUNZIONI POPUP//


function mostra(){

    const Popup = document.getElementById("popup");
    Popup.classList.add("piu")
}



function chiudi(){
    
    const Chiudi = document.querySelector(".esci")
    
    Chiudi.onclick=function(){
        document.getElementById("popup").style.display="none";
    }
}
////////


function aggiungiZoom(){
    let Foto = document.querySelectorAll(".slider_items");

    for(let i=0; i<Foto.length; i++){
        
        Foto[i].onmouseover=function(){
            
            this.classList.add("zoom")
            
        }

        Foto[i].onmouseleave=function(){
            this.classList.remove("zoom")
        }
    }
}




function serietv(x,y){
    x.onclick=function(){

        y.style.display="block"
        let video = document.querySelectorAll(".trailer")
        let esci = document.querySelectorAll(".chiudi")

        for(let i=0; i<video.length;i++){

        }
        for(let i=0; i<esci.length; i++){

            esci[i].onclick=function(){

                y.style.display="none"
                video[i].pause();

            }
        }


    }
//FUNZIONE PER VISUALIZZARE E USCIRE DAL FILM O SERIE SELEZIONATA E PER MANDARE IN PAUSA IL TRAILER
}




function pulsanteAbbonamenti(reg){

    let abbonamenti = document.querySelectorAll(".BUTTON")

    for(let i=0; i<abbonamenti.length;i++){
        abbonamenti[i].onclick=function(){
            reg.style.display="block";
        }
    }
//CON QUESTA FUNZIONE GESTISCO IL DISPLAY DELLA REGISTRAZIONE QUANDO CLICCO SU UN ABBONAMENTO
}




function menuReg(menu,reg){

    menu.onclick=function(){
        reg.style.display="block";
    }
}

function chiudire(){
    
    let chiudireg=document.querySelector(".regchiudi")
    
    
        chiudireg.onclick=function(){
            document.getElementById("registrazione").style.display="none"
            document.getElementById("riuscito").innerHTML=""
            //console.log("hai cliccato")
        } 
//CON QUESTA FUNZIONE CHIUDO IL MODULO DI REGISTRAZIONE E L'ULTIMO SPAN RIMANE VUOTO   
    
}
