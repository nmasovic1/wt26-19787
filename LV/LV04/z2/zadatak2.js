let pregled = document.getElementById("pregled");
let pregledNaslova = document.getElementById("pregledNaslova");
let pregledTeksta = document.getElementById("pregledTeksta");
let oznaka = document.getElementById("oznaka");
let greska = document.getElementById("greska");

function prikaziPregled() {
    let forma = document.forms["obavijest"];
    let naslov = forma["naslov"].value.trim();
    let tekst = forma["tekst"].value.trim();
    let kategorija = forma["kategorija"].value;

    if (naslov === "" || tekst === "") {
        greska.textContent = "Unesite naslov i tekst obavijesti.";
        return false;
    }

    greska.textContent = "";
    pregledNaslova.textContent = naslov;
    pregledTeksta.textContent = tekst;
    oznaka.textContent = kategorija;

    if (kategorija === "Važno") {
        pregled.style.backgroundColor = "#fff0d2";
        pregled.style.color = "#732f00";
    } else {
        pregled.style.backgroundColor = "#e4f1ff";
        pregled.style.color = "#153e65";
    }

    return false;
}

function ocistiPregled() {
    greska.textContent = "";
    pregledNaslova.textContent = "Nema obavijesti";
    pregledTeksta.textContent = "";
    oznaka.textContent = "";
    pregled.style.backgroundColor = "";
    pregled.style.color = "";
}