const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const prompt = require('prompt-sync')({sigint: true})
const {printTable} = require('console-table-printer')

//title of the app
function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Weather app',
            {
                horizontalLayout: 'full',
                font: 'banner'
            }
        )
    )
}
//console.log(getTitle())

//creates table
function getTable(model){
    const listtable = []
    if (model.length>1){
        for (var i=1; i<model.length;i++){
            var name = model[i].name
            var temp = model[i].temp
            var min = model[i].min
            var max = model[i].max
            var listpush ={
            'Name': name,
            'Temp': temp,
            'Max': max,
            'Min': min}
            listtable.push(listpush)
        } }
    else{var listpush ={
            'Name':'name',
            'Temp': 'temp',
            'Max': 'max',
            'Min': 'min'}
            listtable.push(listpush)}
    return listtable
}

function selectCity(model){
    const {dmodel} = model
    const listm = []
    const lmodel = model
    const message = 'Select Location'
    for(var i =1; i<lmodel.length;i++){
        listm.push(lmodel[i].name)
    }
    return inquirer.prompt([
        {
            name: 'select',
            type: 'list',
            message: message,
            default: dmodel,
            choices: listm,

        }])
}


//printTable(getTable())

//input
function inputchoices(model){
    const message = 'Select action'
    return inquirer.prompt([
        {
            name: 'Choices',
            type: 'list',
            message: message,
            choices: ['Add City','Update City','Delete City'],

        }
    ])
}
//input1
function inputaddcity(model){
    const message = 'Location?'
    return inquirer.prompt([
        {
            name: 'addcity',
            type: 'input',
            message: message,
            default: model.temp

        }
    ])
}
/*
//input2
function inputupdatecity(model){
    const message = 'Select city to update'
    return inquirer.prompt([
        {
            name: 'updatecity',
            type: 'input',
            message: message,
            default: model.temp

        }
    ])
}
//input3
function inputdeletecity(model){
    const message = 'Select city to delete'
    return inquirer.prompt([
        {
            name: 'deletecity',
            type: 'input',
            message: message,
            default: model.temp

        }
    ])
}
*/

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputchoices,
    inputaddcity,
    selectCity
}
