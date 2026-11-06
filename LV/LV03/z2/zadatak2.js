function generisiPlan(n, k) {
    for (let i = 1; i <= n; i++) {
        console.log("Obradi paket broj " + i);

        // Pauza ide samo ako je preostao barem jedan paket.
        if (i % k === 0 && i < n) {
            console.log("Pauza");
        }
    }
}

function pokreniPlan() {
    const unosN = prompt("Unesite ukupan broj paketa (n).");

    if (unosN === null) {
        return;
    }

    const n = Number(unosN);

    if (!Number.isSafeInteger(n) || n <= 0) {
        alert("Broj paketa mora biti pozitivan cijeli broj.");
        return;
    }

    const unosK = prompt("Nakon koliko paketa slijedi pauza (k)?");

    if (unosK === null) {
        return;
    }

    const k = Number(unosK);

    if (!Number.isSafeInteger(k) || k <= 0) {
        alert("Broj paketa između pauza mora biti pozitivan cijeli broj.");
        return;
    }

    generisiPlan(n, k);
}

pokreniPlan();