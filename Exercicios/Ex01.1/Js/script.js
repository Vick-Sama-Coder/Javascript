function load() {
    var text = window.document.getElementById('text')
    var image = window.document.getElementById('image')
    var date = new Date()
    var time = date.getHours()
    //let time = 0
    text.innerHTML = `Agora São ${time} horas.`
    if(time >= 0 && time < 12){
        image.src = '../images/manha.jpg'
        document.body.style.background = 'sandybrown'
    }else if(time >= 12 && time < 18){
        image.src = '../images/tarde.jpg'
        document.body.style.background = 'chocolate'
    }else{
        image.src = '../images/noite.jpg'
        document.body.style.background = '#030350'
    }
}


