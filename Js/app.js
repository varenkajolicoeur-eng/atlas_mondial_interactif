/*================================================
=           Recuperation des elements HTML        
=================================================*/
const formRecherche = document.getElementById("form-recherche");
const inputPays = document.getElementById("pays");
const messageErreur = document.getElementById("message-erreur");
const messageChargement = document.getElementById("message-chargement");
const resultats = document.getElementById("resultats");

/*====================================
    ÉCOUTER LE FORMULAIRE
====================================*/
formRecherche.addEventListener("submit", async function(event){

    event.preventDefault();
    const pays = inputPays.value.trim();
    if (pays === ""){ 
        messageErreur.textContent ="Veuillez saisir le nom d'un pays.";
        return;
    }
    messageErreur.textContent = "";
    try{
        messageChargement.classList.remove("hidden");
         const reponse = await fetch(
            `https://api.restcountries.com/countries/v5?q=${pays}`,
        { 
            headers: { 
                Authorization: 'Bearer rc_live_b9a348982d8e47b798230b53efe80b95'
            }
        }
        );
        const donnees = await reponse.json();
        messageChargement.classList.add("hidden");
        console.log(donnees);
        const paystrouve = donnees.data.objects[0];
        console.log(paystrouve)
    }
     catch(error){
        messageChargement.classList.add("hidden");

        messageErreur.textContent = "Une erreur est survenu lors de la recherche.";

     }
    
   
    
});




