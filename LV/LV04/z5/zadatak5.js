function izracunaj() {
    let forma = document.forms["kugla"];
    let unos = forma["poluprecnik"].value.trim();
    let r = Number(unos);
    let greska = document.getElementById("greska");

    if (unos === "" || !Number.isFinite(r) || r < 0) {
        greska.textContent = "Unesite poluprečnik koji je nula ili veći.";
        forma["zapremina"].value = "";
        return false;
    }

    let zapremina = (4 / 3) * Math.PI * r * r * r;

    if (!Number.isFinite(zapremina)) {
        greska.textContent = "Poluprečnik je prevelik za izračunavanje.";
        forma["zapremina"].value = "";
        return false;
    }

    greska.textContent = "";
    forma["zapremina"].value = zapremina.toFixed(4);
    return false;
}