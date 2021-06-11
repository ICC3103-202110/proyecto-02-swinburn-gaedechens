function update(input,input1,model){
   /* //const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    if (input1.lunit == 'Celsius' && input1.runit =='Fahrenheit')
        convertedvalue = (parseInt(input.value)*9/5) + 32
    else if (input1.lunit == 'Celsius' && input1.runit =='Kelvin')
        convertedvalue = parseInt(input.value) + 273.15
    else if (input1.lunit == 'Celsius' && input1.runit =='Celsius')
        convertedvalue = parseInt(input.value) //nothing to convert

    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Kelvin')
        convertedvalue = (parseInt(input.value)-32)*5/9 + 273.15 
    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Celsius')
        convertedvalue =  (parseInt(input.value)-32)*5/9
    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Fahrenheit')
        convertedvalue = parseInt(input.value) //nothing to convert

    else if (input1.lunit == 'Kelvin' && input1.runit =='Celsius')
        convertedvalue = parseInt(input.value) -273.15
    else if (input1.lunit == 'Kelvin' && input1.runit =='Fahrenheit')
        convertedvalue = (parseInt(input.value)- 273.15)*9/5 + 32
    else if (input1.lunit == 'Kelvin' && input1.runit == 'Kelvin')
        convertedvalue = parseInt(input.value) //nothing to convert
*/ //THIS WAS THE CODE FROM MY LAB NUMER 6, IM GOING TO USE THIS AS A GUIDE

    if (input.Choices === 'Add City')
        return{
            ...model,
            name: input.value,
            temp: input1.lunit,
            max: convertedvalue,
            min: input1.runit
        }
    else if (input.Choices === 'Update City')
        return{
            ...model,
            name: input.value,
            temp: input1.lunit,
            max: convertedvalue,
            min: input1.runit
        }
    else if (input.Choices === 'Delete City')
        return{
            ...model,
            name: input.value,
            temp: input1.lunit,
            max: convertedvalue,
            min: input1.runit
        }
}

module.exports = {
    update
}

