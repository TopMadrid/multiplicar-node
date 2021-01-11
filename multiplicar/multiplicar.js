const fs = require('fs'); // importamos el paquete fileSystem
const colors = require('colors');


let listarTabla = (base, limite) =>{


console.log('=============='.green);
console.log(`==tabla del ${ base } ===`.green);
console.log('=============='.green);

    return new Promise( (resolve, reject) =>{

        if (!Number(base) ) { // Enviamos error y lo recoge el catch de la llamada de funcion
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite) ) { // Enviamos error y lo recoge el catch de la llamada de funcion
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data ='';

        for( let i=1; i<=limite; i++ ){
            data +=`${base} * ${i}= ${base*i}\n`;
            //console.log(`${base} * ${i}= ${base*i}`);
        
        }
        
        console.log(data);

    });

}

let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) =>{

        if (!Number(base) ) { // Enviamos error y lo recoge el catch de la llamada de funcion
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite) ) { // Enviamos error y lo recoge el catch de la llamada de funcion
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }


        let data ='';

        for( let i=1; i<=limite; i++ ){
            data +=`${base} * ${i}= ${base*i}\n`;
            //console.log(`${base} * ${i}= ${base*i}`);
        
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject (err) //Enviamos error y lo recoge el catch de la llamada de funcion
            else
                resolve (`tabla-${ base }-al-${limite}.txt`);
            
          });

    });


}


module.exports = {
    crearArchivo,
    listarTabla
}

