function napraviResurs(pocetnaKolicina) {
    if (!Number.isFinite(pocetnaKolicina) || pocetnaKolicina < 0) {
        throw new Error("Neispravna početna količina resursa.");
    }

    let raspolozivo = pocetnaKolicina;

    return {
        potrosi: function (kolicina) {
            if (!Number.isFinite(kolicina) || kolicina < 0 ||
                kolicina > raspolozivo) {
                return false;
            }

            raspolozivo -= kolicina;
            return true;
        },
        preostalo: function () {
            return raspolozivo;
        }
    };
}

const papirPrvaGrupa = napraviResurs(10);
const papirDrugaGrupa = napraviResurs(20);

console.log(papirPrvaGrupa.potrosi(3));    // true
console.log(papirPrvaGrupa.preostalo());  // 7
console.log(papirDrugaGrupa.preostalo()); // 20

console.log(papirDrugaGrupa.potrosi(5));  // true
console.log(papirDrugaGrupa.preostalo()); // 15
console.log(papirPrvaGrupa.preostalo());  // 7

console.log(papirPrvaGrupa.potrosi(-2));  // false
console.log(papirPrvaGrupa.potrosi(8));   // false
console.log(papirPrvaGrupa.preostalo());  // 7