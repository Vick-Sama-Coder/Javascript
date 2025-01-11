function load(){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementsByClassName('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    document.body.style.fontWeight = 'bolder'
    if (hora > 0 && hora <= 12) {
        console.log(`Agora são ${hora} horas`)
        document.body.style.backgroundColor = 'tomato'
        img.src = 'manha.jpg'
    } else if (hora > 12 && hora <= 18) {
        console.log(`agora são ${hora}horas`)
        document.body.style.backgroundColor = 'chocolate'
        img.src = 'tarde.jpg'
    }else{
        console.log(`agora sao ${hora}horas`)
        img.src = 'noite.jpg'
    }
}