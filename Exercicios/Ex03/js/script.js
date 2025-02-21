function count(){
    let fstart = document.querySelector('input#fstart')
    let fend = document.querySelector('input#fend')
    let fstep = document.querySelector('input#fstep')
    let reply = document.querySelector('div.reply')

    if(fstart.value.length == 0 || fend.value.length == 0 || fstep.value.length == 0){
        alert('[ERROR] check the data and try again!')
        reply.innerHTML = 'Impossible count'
    }else{
        reply.innerHTML = `Counting: <br>`
        let start = Number(fstart.value)
        let end = Number(fend.value)
        let step = Number(fstep.value)
        if(step <= 0){
            alert('Impossible count! Considering STEP 1')
            step = 1
        }
        if(start < end){
            // Progressive Count
            for(let cnt = start; cnt <= end; cnt += step) {
                reply.innerHTML += `${cnt} \u{1F449}`
            }
            
        }else{
           // Regressive Count
            for(let cnt = start; cnt >= end; cnt -= step){
                reply.innerHTML += `${cnt} \u{1F449}`
            }
        }
        reply.innerHTML += `\u{1F3C1}`
        
    }
}

function int(){
    document.body.section.style.background = '#6b6bf1'
    document
}