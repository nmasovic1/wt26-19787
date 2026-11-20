// Početni modul iz postavke. Pregled vraća referencu na profil.
function napraviPocetniProfil() {
    let profil = { naziv: "Početni" };

    return {
        pregled: function () {
            return profil;
        },
        postaviNaziv: function (n) {
            profil.naziv = n;
        }
    };
}

const pocetniModul = napraviPocetniProfil();
const pocetniPregled = pocetniModul.pregled();

pocetniPregled.naziv = "Promijenjen izvana";

// Predviđanje: naredni pregled vraća naziv "Promijenjen izvana".
console.log(pocetniModul.pregled().naziv); // Promijenjen izvana

// Prepravljeni modul. Pregled pravi novi objekat pri svakom pozivu.
function napraviProfil() {
    let profil = { naziv: "Početni", aktivan: true };

    return {
        pregled: function () {
            return {
                naziv: profil.naziv,
                aktivan: profil.aktivan
            };
        },
        postaviNaziv: function (n) {
            profil.naziv = n;
        }
    };
}

const modul = napraviProfil();
const kopijaProfila = modul.pregled();

kopijaProfila.naziv = "Promijenjen izvana";
kopijaProfila.aktivan = false;

console.log(modul.pregled()); // { naziv: "Početni", aktivan: true }

modul.postaviNaziv("Novi naziv");

console.log(modul.pregled()); // { naziv: "Novi naziv", aktivan: true }