const enCartelera = require('./src/enCartelera.js');

const routes = (req, res) => {
    switch (req.url) {
        // Home
        case '/':
            res.end('Home');
            break;
        // En cartelera
        case '/en-cartelera':
            // console.log(enCartelera);
            res.end(enCartelera);
            break;
        case '/mas-votadas':
            res.end('Más Votadas');
            break;
        case '/sucursales':
            res.end('Sucursales');
            break;
        case '/contacto':
            res.end('Contacto');
            break;
        case '/preguntas-frecuentes':
            res.end('Preguntas Frecuentes');
            break;
        default:
            res.end('404 not found')
    }
}

module.exports = routes;