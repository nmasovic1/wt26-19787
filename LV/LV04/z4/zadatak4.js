function promijeniGranu(dugme, id) {
    let predmeti = document.getElementById(id);
    let znak = dugme.getElementsByTagName("span")[0];

    if (predmeti.style.display === "none") {
        predmeti.style.display = "block";
        znak.textContent = "-";
    } else {
        predmeti.style.display = "none";
        znak.textContent = "+";
    }
}