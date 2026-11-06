function napraviTablicuMnozenja() {
    document.write("<table>");
    document.write('<thead><tr><th>X</th>');

    for (let kolona = 1; kolona <= 10; kolona++) {
        document.write('<th scope="col">' + kolona + "</th>");
    }

    document.write("</tr></thead>");
    document.write("<tbody>");

    for (let red = 1; red <= 10; red++) {
        document.write('<tr><th scope="row">' + red + "</th>");

        for (let kolona = 1; kolona <= 10; kolona++) {
            document.write("<td>" + (red * kolona) + "</td>");
        }

        document.write("</tr>");
    }

    document.write("</tbody></table>");
}

napraviTablicuMnozenja();