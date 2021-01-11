const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then 
        break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite) //envia el argumento base a la función crearArchivo
            .then (archivo => console.log(`Archivo creado: `, colors.green( archivo )))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// Recoge los parametros desde la consola. node app --base=10
//let argv2 = process.argv; // devuelve un array de los parametros

console.log('Base', argv.base); // visualiza el parámetro --base o el alias -b
console.log('Limite', argv.limite); // visualiza el parámetro --limite

//let parametro = argv[2]; // el tercer parametro seria este --base=10
//let base = parametro.split('=')[1] // separa el argumento en 2 elementos del array ['--base', '10'] y coge el segundo

//console.log(argv);
//console.log(argv2); 

