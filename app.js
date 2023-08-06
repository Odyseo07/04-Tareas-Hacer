///////////////////////////////////
/*OSCAR OVIDIO MACHACA ACERO */
///////////////////////////////////
require ('colors');
console.clear();
const { guardarBD, leerDB} = require('./helpers/guardarArchivo');
//importacion de paquetes
const{inquirerMenu, pausa, leerInput, listadoTareasBorrar, 
    confirmar, mostrarListadoChecklist}=require('./helpers/inquirer')
const Tarea=require('./models/tarea');
const Tareas = require('./models/tareas');
//async funcion asincrona
const main = async()=>{
    console.log("Hola mundo");
    const tareas=new Tareas();
    //const tareaDB=leerDB();
    let opt="";
    do{
        
        opt = await inquirerMenu();
        switch(opt){
            case '1':
            //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                //console.log(desc);
            break;
            case '2':
            //crear opcion
            //console.log(tareas.listadoArr);
            tareas.listadoCompleto();
            break;
            case '3':
            //crear opcion
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                //crear opcion
                tareas.listarPendientesCompletadas(false);    
            break;
            case '5':
                //crear opcion
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            case '6':
                    //crear opcion
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id!=='0'){
                    const ok = await confirmar('¿Esta seguro?');
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                } 
            break;
        }
        guardarBD(tareas.listadoArr);//guarda en todo momento
        await pausa();
    } while (opt!=='0');

}

main();