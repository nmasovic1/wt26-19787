const brojackiObjekat = (function () {
    let brojac = 0;

    return {
        dodaj: function () {
            brojac += 1;
            return brojac;
        },
        resetuj: function () {
            brojac = 0;
        }
    };
})();

console.log(brojackiObjekat.dodaj()); // 1
console.log(brojackiObjekat.dodaj()); // 2
console.log(brojackiObjekat.dodaj()); // 3

brojackiObjekat.resetuj();

console.log(brojackiObjekat.dodaj()); // 1