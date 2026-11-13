let stavke = document.getElementById("stavke");

function azurirajZbir() {
    let redovi = stavke.getElementsByTagName("tr");
    let zbir = 0;

    for (let i = 0; i < redovi.length; i++) {
        let celije = redovi[i].getElementsByTagName("td");
        zbir += Number(celije[1].textContent);
    }

    document.getElementById("zbir").textContent = zbir;
    document.getElementById("brojStavki").textContent = redovi.length;
}

function dodajStavku() {
    let forma = document.forms["unos"];
    let naziv = forma["naziv"].value.trim();
    let unosIznosa = forma["iznos"].value.trim();
    let iznos = Number(unosIznosa);
    let greska = document.getElementById("greska");

    if (naziv === "" || unosIznosa === "" || !Number.isFinite(iznos) || iznos < 0) {
        greska.textContent = "Unesite naziv i broj minuta koji je nula ili veći.";
        return false;
    }

    let red = stavke.insertRow(stavke.getElementsByTagName("tr").length);
    red.insertCell(0).textContent = naziv;
    red.insertCell(1).textContent = iznos;
    azurirajZbir();

    greska.textContent = "";
    forma["naziv"].value = "";
    forma["iznos"].value = "";
    return false;
}

azurirajZbir();