document.addEventListener("DOMContentLoaded",function(){
  
    /* CONTROLLO FORM ACCEDI */
    
    let UserAccedi= document.getElementById("Username"); 
    let password = document.getElementById("Password")
    let accedi = document.getElementById("accedi")
    
    accedi.addEventListener("submit", function(e){

        e.preventDefault();
        controllaEmail(UserAccedi);
        controllaPassword(password);
        
        
        let errori=document.querySelectorAll(".ERR");
        if(errori.length==0){
            document.getElementById("accedi").style.display="none"
            document.getElementById("utente").style.display="block"
        }

    })//FINE FORM ACCEDI

    //CONTROLLI FORM REGISTRAZIONE
    
    let registrati = document.getElementById("registrati")
    let UserReg = document.getElementById("Email")
    let PassReg = document.getElementById("PasswordReg")
    let PassDue = document.getElementById("Ripetipassword")
    
    
    registrati.addEventListener("submit",function(e){
        
        e.preventDefault();
        controllaEmail(UserReg);
        controllaPassword(PassReg);
        checkedAccetto();
        //CONTROLLO RIPETI PASSWORD
        if(PassDue.value!=PassReg.value){
            PassDue.nextElementSibling.innerHTML="Le password non cambiano";
            PassDue.classList.add("ERR")
        }
        else{
            PassDue.nextElementSibling.innerHTML="";
            PassDue.classList.remove("ERR")
        }


        let errori=document.querySelectorAll(".ERR");
        if(errori.length==0){
            document.getElementById("riuscito").innerHTML="Registrazione avvenuta con successo";
            registrati.reset();
        }
//IF QUANDO GLI ERRORI NELLA REGISTRAZIONE SONO PARI A 0 E QUINDI LA REGISTRAZIONE AVVIENE CON SUCCESSO E FACCIO UN RESET DEI CAMPI 
        

    })


})//CHIUSURA DOM








//FUNZIONE CONTROLLO EMAIL
function controllaEmail(email){
    
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,12})+$/
    regex.test(email.value.trim())
    
    let check = regex.test(email.value.trim());
    
   
    if(check==false){
        email.nextElementSibling.innerHTML="Email errata";
        email.classList.add("ERR")
    }
    else{
        email.nextElementSibling.innerHTML="";
        email.classList.remove("ERR")
    }
}
//FUNZIONE CONTROLLO PASSWORD
function controllaPassword(pass){
    let regex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

    regex.test(pass.value.trim())

    let check = regex.test(pass.value.trim());
    console.log(check)

    if(check==false){
        pass.nextElementSibling.innerHTML="Password errata ricorda che deve contenere 1 numero 1 lettera maiuscola e 1 carattere speciale";
        pass.classList.add("ERR")
    }
    else{
        pass.nextElementSibling.innerHTML="";
        pass.classList.remove("ERR")
    }
}

function checkedAccetto(){
    let accetto = document.getElementById("accetto")

    if(accetto.checked){
        accetto.classList.remove("ERR");
        accetto.nextElementSibling.style.color="#fff";
    }   
    else{
        accetto.classList.add("ERR");
        accetto.nextElementSibling.style.color="red";
    } 
}







