const backendUrl = "https://cinexunidos-production.up.railway.app/"
let query = "a=sambil-chacao";
function obtenerTheatres() {
    console.log("sambil-chacao");
    fetch(`${backendUrl}theatres/${query.split("=")[1]}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // const peliculas = document.getElementById("peículas")
            const teatro = data
            const pelis = teatro.auditoriums 
            console.log(pelis);
        })
}
obtenerTheatres()