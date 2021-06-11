
const {update} = require('./update')
const {view} = require('./view')
const {model} = require('./model')
const prompt = require('prompt-sync')({sigint: true})
const {inputchoices, inputupdatecity, inputaddcity, inputdeletecity} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)//printing the title
        printTable(table)//printing the table
        console.log('Ctrl+C to exit')//how to exit from the app
        // FORM (Ask user input)
        const input = await inputchoices(model)
        if (input == 'Add City')
            const input1 = await inputaddcity(model)
        if (input == 'Update City')
            const input2 = await inputupdatecity(model)
        if (input == 'Delete City')
            const input3 = await inputdeletecity(model)
        
        //const input = await inputchoices(model)
        //const input1 = await listForm(model)
        const updatedModel = update(input,input1,input2, input3, model) //updating the model for the app
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
        console.clear()
    }
}

module.exports = {
    app
}