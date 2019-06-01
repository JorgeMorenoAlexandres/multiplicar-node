//npm init: comando para crear el package.json
//npm i yargs --save : comando para instalar el paquete yargs
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
                console.log(`Archivo creado ${archivo}`);
            })
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no conocido');
}


// let argv2 = process.argv;
// console.log('Base',argv.base);
// console.log('Limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];