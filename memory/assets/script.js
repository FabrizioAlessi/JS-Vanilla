let valore1 = "";
let valore2 = "";
let carte = ["👻", "👻", "💩", "💩", "😎", "😎", "😈", "😈", "🙈", "🙈", "🙉", "🙉", "🙊", "🙊", "💀", "💀", "👺", "👺", "🤖", "🤖"];
let contatore = 0 //quando arriva a 10 hai vinto
let valore1Contenuto = ""
let valore2Contenuto = ""
let tavolo = document.getElementById("tavoloDaGioco")

//funzione gioco serve per il punteggio del memory
//al click, prendo un valore da html
//e lo salvo in una variabile
function gioco(a) {
    //la card si gira di faccia
    a.classList.remove("cardBack");
    a.classList.add("cardShow");
    if (valore1 == "") {
        //prende il valore di card
        valore1 = a;
        valore1Contenuto = valore1.innerHTML
    } else {
        valore2 = a
        valore2Contenuto = valore2.innerHTML
        if (valore1Contenuto == valore2Contenuto) {
            contatore++
            valore1.setAttribute("onclick", "") //tolgo l'onclick sulle coppie trovate, così evito bugs
            valore2.setAttribute("onclick", "")
            valore1 = "";
            valore2 = "";
            if (contatore == 10) {
                alert("complimenti, hai vinto");
            }
        } else {
            a.classList.remove("cardShow");
            a.classList.add("card");
            valore1.classList.remove("cardShow");
            valore1.classList.add("card");
            setTimeout(backCarteSelezionate,1000);
        };       
    };
};
//popolazione card 
let cella = document.createElement("div")
function play() {
    //nascondo il button start game
    let payToPlay = document.getElementById("payToPlay")
    payToPlay.style.display = "none"
    //ciclio per le righe
    for (c = 1; c <= 4; c++) {
        let riga = document.createElement("div")
        riga.setAttribute("class", "row")//attribute row di boostrap per creare una riga
        tavolo.appendChild(riga);
        //ciclio per popolare le celle
        for (i = 0; i < 5; i++) {
            cella = document.createElement("div")
            let random = Math.floor(Math.random() * carte.length)
            cella.setAttribute("class", "prova col-2 cardShow")
            cella.setAttribute("onclick", "gioco(this)")
            cella.innerHTML += "<p>" + carte[random]; + "</p>"
            carte.splice(random, 1);
            riga.appendChild(cella)
        };
    };
    setTimeout(nascondiCarte, 5000);
    setTimeout(backCarte, 7000);
};
//funzioni delle animazioni
function nascondiCarte() {
    let carte1 = document.getElementsByClassName("prova");
    for (let card of carte1) {
        card.classList.remove("cardShow");
        card.classList.add("card");
    };
};
function backCarte() {
    let carte2 = document.getElementsByClassName("prova");
    for (let card of carte2) {
        card.classList.remove("card");
        card.classList.add("cardBack");
    };
};
function backCarteSelezionate(){
    valore1.classList.remove("card");
    valore1.classList.add("cardBack");
    valore2.classList.remove("card");
    valore2.classList.add("cardBack");
    valore1.style.backgroundColor = "blueviolet"
    valore1 = "";
    valore2 = "";
};

