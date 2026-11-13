let stavke = document.getElementsByTagName("li");

function postaviStanje(stavka, zavrsena) {
    let stanje = stavka.getElementsByClassName("stanje")[0];
    let dugme = stavka.getElementsByTagName("button")[0];

    if (zavrsena) {
        stanje.textContent = "Završeno";
        stanje.style.color = "green";
        dugme.style.textDecoration = "line-through";
    } else {
        stanje.textContent = "Nezavršeno";
        stanje.style.color = "";
        dugme.style.textDecoration = "none";
    }
}

function azurirajSazetak() {
    let brojZavrsenih = 0;

    for (let i = 0; i < stavke.length; i++) {
        let stanje = stavke[i].getElementsByClassName("stanje")[0];

        if (stanje.textContent === "Završeno") {
            brojZavrsenih++;
        }
    }

    document.getElementById("sazetak").textContent =
        "Završeno " + brojZavrsenih + " od " + stavke.length + " stavki.";
}

function promijeni(dugme) {
    let stavka = dugme.parentNode;
    let stanje = stavka.getElementsByClassName("stanje")[0];

    postaviStanje(stavka, stanje.textContent === "Nezavršeno");
    azurirajSazetak();
}

function vratiSve() {
    for (let i = 0; i < stavke.length; i++) {
        postaviStanje(stavke[i], false);
    }

    azurirajSazetak();
}

azurirajSazetak();