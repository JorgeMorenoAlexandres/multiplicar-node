const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola el comando a listar', opts)
    .command('crear', 'Crea el archivo de multiplicar', opts)
    .help().argv;

module.exports = {
    argv
}