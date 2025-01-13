function load(){
    var msg = document.getElementById('msg')
    var img = document.querySelector('div#image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    document.body.style.fontWeight = 'bolder'
    if (hora > 0 && hora <= 12) {
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = 'tomato'
        
    } else if (hora > 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = 'chocolate'
        
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = 'darkblue'
    }
}