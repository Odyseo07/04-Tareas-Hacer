const inquirer = require('inquirer');

require ('colors');

//envio de informacion de forma automatica
let preguntas=[
    {
        type: 'list',
        name: 'opcion',
        message: 'que desea hacer?',
        choices: [
            {
                value:'1',
                name:`${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.green} Listar Tareas`
            },
            {
                value:'3',
                name:`${'3.'.green} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4.'.green} Listar Tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.green} Completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.green} Borrar Tareas`
            },
            {
                value:'0',
                name:`${'0.'.green} Salir`
            }
        ]
    }
];

const inquirerMenu = async()=>{
    console.clear();
    console.log('======================='.green);
    console.log('Seleccione una opcion'.white );
    console.log('=======================\n'.green);

    //esperamos el parametro qeu ingresara
    //que sera un vector de elementos
    const {opcion} = await inquirer.prompt(preguntas);
    //devolvemos la opcion

    return opcion;

};

const pausa = async()=>{
    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n')
    await inquirer.prompt(question);
}

const leerInput = async(message) =>{
    const question = [
        {
            type:'input', //valor de entrada
            name: 'desc', //generador de desestructuracion
            message, //mensaje
            validate(value){
                if(value.length===0){
                    return "Por favor ingrese un valor";
                }
                return true;
            }
        }
    ];
    //aplicamos la desestructuracion
    const {desc}=await inquirer.prompt(question);
    return desc;
}


const listadoTareasBorrar = async(tareas=[])=>{
    //con este pedazo de codigo manipularemos la informacion que
    //nos esta proporcionando el sistema
    const  choices = tareas.map((tarea, i )=>{
        const idx = `${i+1}.`.green;
        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });
    //ahroa recibiremos las preguntas
    choices.unshift({
        value: '0',
        name: '0.'.green+'Cancelar'
    });
    const preguntas=[
        {
            type:'list',
            name:'id',
            message:'Borrar',
            choices
        }
    ]
    const{id}=await inquirer.prompt(preguntas);
    return id;
}

const mostrarListadoChecklist = async(tareas=[])=>{
    // copiamos el codigo de: listadoTareasBorrar y lo modificamos
    const  choices = tareas.map((tarea, i )=>{
        const idx = `${i+1}.`.green;
        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn)?true:false
        }
    });
    const pregunta=[
        {
            type:'checkbox',
            name:'ids',
            message:'Selecciones',
            choices
        }
    ]
    const{ids}=await inquirer.prompt(pregunta);
    return ids;
}



const confirmar = async (message)=>{
    //generamos el menu de preguntas y opciones
    const question =[
        {
            type:'confirm',
            name:'ok',
            message
        }
    ];
    const {ok} = await inquirer.prompt(question);
    return ok
}

module.exports = {
     inquirerMenu, 
     pausa,
     leerInput,
     listadoTareasBorrar,
     confirmar,
     mostrarListadoChecklist
};


/*const inquirer = require('inquirer');
require('colors');
//envio de informacion automatica
const preguntas=[
{
    type:'list',
    name: 'opcion',
    message:'¿Que desea hacer?',
    choices:[

        {
            value:'1',
            name:`${'1.'.green} Crear tarea`
        },
        {
            value:'2',
            name:`${'2.'.green} Listar tareas`
        },
        {
            value:'3',
            name:`${'3.'.green} Listar Tareas completadas`
        },
        {
            value:'4',
            name:`${'4.'.green} Listar Tareas pendientes`  
        },
        {
            value:'5',
            name:`${'5.'.green} Completar tareas`
        },
        {
            value:'6',
            name:`${'6.'.green} Borrar tareas`  
        },
        {
            value:'0',
            name:`${'0.'.green} salir`
        },

]
}
];

const inquirerMenu=async()=>{
        console.clear();
        console.log("===========================".red);
        console.log("SELECCIONE UNA OPCIÓN".white);
        console.log("===========================\n".green);
        const {opcion} = await inquirer.prompt(preguntas);
        return opcion;
}

const pausa = async()=>{
        const question =[
            {
                type: 'input',
                name: 'enter',
                message:`Presione ${'enter'.green} para continuar`
            }
        ];
        console.log("\n");
        await inquirer.prompt(question);
    }
const leerInput = async(message)=>{
    const question=[
        {
            type: 'input',
            name:'desc',
            message,
            validate(value){
                if(value.length===0)
                    return "por favor ingrese un valor"
                    return true;
            }
        }
    ];
    const{desc}=await inquirer.prompt(question);
    return desc;
}

    module.exports={
        inquirerMenu,
        pausa,
        leerInput
    }*/