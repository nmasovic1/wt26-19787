function sabiranje() {
    const prviUnos = document.getElementById("sabirak1").value;
    const drugiUnos = document.getElementById("sabirak2").value;
    const poljeZbira = document.getElementById("zbir");

    poljeZbira.value = "";

    if (prviUnos === null || drugiUnos === null ||
        prviUnos.trim() === "" || drugiUnos.trim() === "") {
        alert("Unesite oba sabirka.");
        return;
    }

    const prviBroj = Number(prviUnos);
    const drugiBroj = Number(drugiUnos);

    if (!Number.isFinite(prviBroj) || !Number.isFinite(drugiBroj)) {
        alert("Neispravan unos. Za decimalne brojeve koristite tačku.");
        return;
    }

    poljeZbira.value = prviBroj + drugiBroj;
}

const dugme = document.getElementById("dugme");
dugme.addEventListener("click", sabiranje);