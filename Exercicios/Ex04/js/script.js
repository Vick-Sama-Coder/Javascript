function calculate(){
    let fnumber = document.querySelector('input#fnumber')
    let tabs = document.querySelector('select#tabs')

    if(fnumber.value.length == ''){
        alert('[ERROR] Data missing! try again!')
    }else{
        var number = Number(fnumber.value)
        tabs.innerHTML = ''
        for(var calc = 0; calc <= 10; calc++){
            let iten = document.createElement('option')
            iten.text = `${number} x ${calc} = ${number*calc}`
            tabs.appendChild(iten)
            
            }
        }


    }



    
