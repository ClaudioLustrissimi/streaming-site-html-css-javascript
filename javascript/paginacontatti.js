document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").addEventListener("submit",function(){

        event.preventDefault();
//-----------------CAMPO NOME-----------------------------------        
        if (campoObbligatorio(nome)){
            nome.classList.remove("errore");
            nome.nextElementSibling.innerHTML=""
        }
        else{
            nome.classList.add("errore");
            nome.nextElementSibling.innerHTML=" Devi scrivere un nome valido"
        }
//-------------------CAMPO TELEFONO------------------------------
        if (campoObbligatorio(telefono)){
            if(campoTelefono(telefono)){
                telefono.classList.remove("errore")
                telefono.nextElementSibling.innerHTML=""
            }
            else{
                telefono.classList.add("errore")
                telefono.nextElementSibling.innerHTML="Numero di cellulare non valido"
            }
        }
        else{
            telefono.classList.add("errore");
            telefono.nextElementSibling.innerHTML="Campo Obbligatorio"
        }
//--------------------CAMPO COGNOME------------------------------
        if (campoObbligatorio(cognome)){
            cognome.classList.remove("errore");
            cognome.nextElementSibling.innerHTML=""
        }
        else{
            cognome.classList.add("errore");
            cognome.nextElementSibling.innerHTML=" Devi scrivere un cognome valido"
        }

//--------------------CAMPO EMAIL------------------------------------
        if(campoObbligatorio(username))
                {
                    if(controlloEmail(username)){
                        username.classList.remove("errore");
                        username.nextElementSibling.innerHTML="";
                }
                else{
                        username.classList.add("errore");
                        username.nextElementSibling.innerHTML="Email errata";
                }
                }
                else{
                    username.classList.add("errore");
                    username.nextElementSibling.innerHTML="Campo obbligatorio";
                }

//--------------------CAMPO TEXTAREA-----------------------------------------
        if (campoObbligatorio(messaggio)){
            messaggio.classList.remove("errore");
            messaggio.nextElementSibling.innerHTML=""
        }
        else{
            messaggio.classList.add("errore");
            messaggio.nextElementSibling.innerHTML="Campo Obbligatorio"
        }

//------------------CHECKBOX-----------------------------------------------
if(accetto.checked){
    accetto.classList.remove("errore");
    accetto.nextElementSibling.style.color="#fff";
}   
else{
    accetto.classList.add("errore");
    accetto.nextElementSibling.style.color="red";
} 

//----------------VARIABILE ERRORI-----------------------------
let errori=document.querySelectorAll(".errore");

if(errori.length==0){
    this.submit();
}

    });
});


function campoObbligatorio(campo)
{
    if(campo.value.trim()==0){
      return false;
    }
    else{
      return true;
    }
}

function campoTelefono(telefono)
{   
    let regex= /^((\+|00)?39)?3\d{2}\d{6,7}$/


    return regex.test(telefono.value.trim());   
}

function controlloEmail(email)
{   
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,12})+$/

    return regex.test(email.value.trim());   
}
