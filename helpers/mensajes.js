require('colors');

const mostrarMenu=()=>{

    return new Promise(resolve=>{
        console.clear();
        console.log("===========================".red);
        console.log("SELECCIONE UNA OPCIÓN".yellow);
        console.log("===========================".green);
    
        console.log( ` ${'1.'.green} Crear Tarea`);
        console.log( ` ${'2.'.green} Listar Tarea`);
        console.log( ` ${'3.'.green} Listar Tareas completas`);
        console.log( ` ${'4.'.green} Listar Tareas pendientes`);
        console.log( ` ${'5.'.green} Completar Tareas`);
        console.log( ` ${'6.'.green} Borrar Tareas`);
        console.log( ` ${'0.'.green} X Salir`);

        /*paquete propio de node*/
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });

            readline.question('Seleccione una opcion: ', (opt)=>{
            readline.close();
            //esto nos permite recibir informacion
            resolve(opt);
        })
    });
    
}

    const pausa=()=>{
        return new Promise(resolve=>{
            const readline=require('readline').createInterface({
                input:process.stdin,
                output:process.stdout    
            });
            readline.question(`\nPresione ${'Enter'.green} para continuar\n`,(opt)=>{
            readline.close();
            resolve();
            })
    });

}
module.exports={
    mostrarMenu,
    pausa
}