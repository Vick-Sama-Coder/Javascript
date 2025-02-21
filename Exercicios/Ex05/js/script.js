let fnumber = document.querySelector('input#fnumber')
let fadded = document.querySelector('select#fadded')
let reply = document.querySelector('div#reply')
let values = []

function add(){

    if(fnumber.value.length == 0 || fnumber.value == 0 || fnumber.value > 100){
        alert('[ERROR] Add some valid number')
    }else{
        let number = Number(fnumber.value)
        let iten = document.createElement('option')
        values.push(number)
        iten.text = `The added number is ${number}`
        fadded.appendChild(iten)
    }
}


function finalize(){

}