const opts ={
    base:{ // define el parametro --base
        demand: true, // define obligatorio
        alias: 'b' // define el alias -b para el parametro --base
    },
    limite: {
        alias: 'l',
        default: 10 // Por defecto valor 10 si no se introduce nada
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar',opts)
                .command('crear', 'Genera un archivo con la tabla de multiplicar',opts)
                .help() // al usar node app --help nos muestra lista de parametros requeridos, valor por defecto, etc...
                .argv;

module.exports = {
    argv
}