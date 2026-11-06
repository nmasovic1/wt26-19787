// Procjena služi osoblju studentske službe.
const p1 = 5;
const p2 = 15;

function procijeniZaStudentskuSluzbu(vrijednost, p1, p2) {
    if (vrijednost <= p1) {
        return "Prihvatljivo";
    }

    if (vrijednost <= p2) {
        return "Produženo čekanje";
    }

    return "Za provjeru";
}

function pokreniProcjenu() {
    const unos = prompt("Unesite vrijeme čekanja u minutama.");

    if (unos === null) {
        return;
    }

    if (unos.trim() === "") {
        alert("Unesite vrijeme čekanja.");
        return;
    }

    const minute = Number(unos);

    if (!Number.isFinite(minute) || minute < 0) {
        alert("Unesite nenegativan broj. Za decimalni broj koristite tačku.");
        return;
    }

    const kategorija = procijeniZaStudentskuSluzbu(minute, p1, p2);
    alert(kategorija);
}

pokreniProcjenu();