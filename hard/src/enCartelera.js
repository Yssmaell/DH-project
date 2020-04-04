
const fs = require('fs');
const archivo = "movies.json"
const contenido = function() {
    const movies = JSON.parse(fs.readFileSync(archivo, 'utf-8'));
    return movies;
};

const objetoJSON = contenido();
const titulo = "Titulo: En Cartelera";
const totalPeliculas = "Total de películas: " + objetoJSON.total_movies;
let contenidoMovies = titulo + "\r\n\r\n" + totalPeliculas + "\r\n\r\n";


objetoJSON.movies.forEach(element => {
    contenidoMovies +=  "\t" + element.title + "\n\r";
    contenidoMovies += "\t" + element.overview + "\n\r";
});


module.exports = contenidoMovies;