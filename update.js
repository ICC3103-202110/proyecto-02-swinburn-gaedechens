// Returns a random integer from 1 to 10:
//Math.floor(Math.random() * 10) + 1;
function updateadd(input1,model){
    var temperature = Math.floor(Math.random()*20)+10
    var maximum = Math.floor(Math.random()*30)+20
    var minimum = Math.floor(Math.random()*10)+1
    const city_to_add = {name:input1, temp: temperature ,max:maximum , min:minimum}
    model.push(city_to_add)
    return model
}

function updatedelete(input2,model){
    const smodel = model
    for(var i = 0;i<smodel.length;i++){
        if(smodel[i].name == input2){
            smodel.splice(i, 1)
            break
        }
    }
    return model
}

//function 
module.exports = {
    updateadd,
    updatedelete
}

