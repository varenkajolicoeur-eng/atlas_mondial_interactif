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
    /*====================================
    Appel de l'API REST Countries
    ====================================*/
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
        const paysTrouve = donnees.data.objects[0];
        
        // Affichage des résultats

        resultats.replaceChildren();
        // Création de la carte du pays
        const cartePays = document.createElement("article");
        cartePays.classList.add("carte-pays");

        //creation d'une fonction pour creer les elements HTML pour chaque information du pays.
        function creerLigne(libelle, valeur) {

            const paragraphe = document.createElement("p");

            const etiquette = document.createElement("strong");
            etiquette.textContent = `${libelle} :`;

            const contenu = document.createElement("span");
            contenu.textContent = valeur;

            paragraphe.appendChild(etiquette);
            paragraphe.append(" ");
            paragraphe.appendChild(contenu);

            return paragraphe;
        }
        // Création des éléments HTML pour chaque information du pays.
        const titre = document.createElement("h2");
        titre.textContent = paysTrouve.names.common;
        cartePays.appendChild(titre);
        
        const drapeauPays = document.createElement("div");
        drapeauPays.classList.add("drapeau-pays");

        const infosPays = document.createElement("div");
        infosPays.classList.add("infos-pays");

        const conteneurPays = document.createElement("div");
        conteneurPays.classList.add("conteneur-pays");

        

        const drapeau = document.createElement("img");
        drapeau.classList.add("drapeau");
        drapeau.src = paysTrouve.flag.url_svg;
        drapeau.alt = `Drapeau de ${paysTrouve.names.common}`;
        drapeauPays.appendChild(drapeau);
        conteneurPays.appendChild(drapeauPays);
        cartePays.appendChild(conteneurPays);

        infosPays.appendChild(creerLigne("Nom officiel", paysTrouve.names.official));

        infosPays.appendChild(creerLigne("Capitale", paysTrouve.capitals[0].name));
        
        infosPays.appendChild(creerLigne("Population", paysTrouve.population.toLocaleString()));

        infosPays.appendChild(creerLigne("Région", paysTrouve.region));

        infosPays.appendChild(creerLigne("Monnaie", `${paysTrouve.currencies[0].name} (${paysTrouve.currencies[0].symbol})`));

        infosPays.appendChild(creerLigne("Langues", `${paysTrouve.languages.map(langue => langue.name).join(", ")}`));

        conteneurPays.appendChild(infosPays);
        cartePays.appendChild(conteneurPays);
        resultats.appendChild(cartePays);
        
    }
     catch(error){
        messageChargement.classList.add("hidden");

        messageErreur.textContent = "Une erreur est survenu lors de la recherche.";

     }
    
   
    
});




