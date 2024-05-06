function searchDiv() {
    var searchId = document.getElementById("searchInput").value.trim(); // Obtener el ID ingresado por el usuario, eliminando espacios en blanco al principio y al final

    if (searchId === "") {
        // Si el campo de búsqueda está vacío, mostrar todos los divs
        var allDivs = document.querySelectorAll(".lomasvendido .item");
        allDivs.forEach(function(div) {
            div.style.display = "block"; // Mostrar cada div
        });
    } else {
        // Si se ingresó un valor en el campo de búsqueda
        var divToShow = document.getElementById(searchId); // Buscar el div con el ID especificado

        if (divToShow) {
            // Si se encuentra el div, mostrarlo y ocultar los demás
            var allDivs = document.querySelectorAll(".lomasvendido .item");
            allDivs.forEach(function(div) {
                div.style.display = "none";
            });
            divToShow.style.display = "block";
        } else {
            // Si no se encuentra el div, mostrar un mensaje de error
            alert("No se encontró ningún div con el ID especificado.");
        }
    }
}
