function searchDiv() {
    var searchId = document.getElementById("searchInput").value.trim();

    if (searchId === "") {

        var allDivs = document.querySelectorAll(".lomasvendido .item");
        allDivs.forEach(function(div) {
            div.style.display = "block";
        });
    } else {
  
        var divToShow = document.getElementById(searchId);

        if (divToShow) {
            var allDivs = document.querySelectorAll(".lomasvendido .item");
            allDivs.forEach(function(div) {
                div.style.display = "none";
            });
            divToShow.style.display = "block";
        } else {
            alert("No se encontró ningún restaurante con ese nombre");
        }
    }
}
