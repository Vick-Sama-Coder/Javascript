function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector('input#year')
    var reply = document.querySelector('div#reply')
    
    if(fyear.value.length == 0 || Number(fyear.value) > year){
        alert('Verify the data and try again!')
    }else{
        var fgender = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'pic')
        var gender = ''
        if(fgender[0].checked){
            gender = 'man'
            if(age >= 0 && age <= 3 ){
                //Baby
                img.setAttribute('src', '../images/baby-m.jpg')
            }else if(age > 3 && age < 11){
                //Child
                img.setAttribute('src', '../images/child-m.jpg')
            }else if(age >= 11 && age < 16){
                //Teenager
                img.setAttribute('src', '../images/teenager-m.jpg')
            }else if(age >= 16 && age < 21){
                //Teen
                img.setAttribute('src', '../images/youth-m.jpg')
            }else if(age >= 22 && age < 60){
                //Adult
                img.setAttribute('src', '../images/adult-m.jpg')
            }else if(age >= 61 && age < 120){
                //elderly
                img.setAttribute('src', '../images/elderly-m.jpg')
            }else{
                //Ancestor
                img.setAttribute('src', '../images/ancestor.jpg')
            }
        }else if(fgender[1].checked){
            gender = 'woman'
            if(age >= 0 && age <= 3 ){
                //Baby
                img.setAttribute('src', '../images/baby-f.jpg')
            }else if(age > 3 && age < 11){
                //Child
                img.setAttribute('src', '../images/child-f.jpg')
            }else if(age >= 11 && age < 16){
                //Teenager
                img.setAttribute('src', '../images/Teenager-f.jpg')
            }else if(age >= 16 && age < 21){
                //Teen
                img.setAttribute('src', '../images/youth-f.jpg')
            }else if(age >= 22 && age < 60){
                //Adult
                img.setAttribute('src', '../images/adult-f.jpg')
            }else if(age >= 61 && age < 120){
                //elderly
                img.setAttribute('src', '../images/elderly-f.jpg')
            }else{
                //Ancestor
                img.setAttribute('src', '../images/ancestor.jpg')
            }
        }
    }
    reply.innerHTML = `You are a ${gender} with ${age} years!`
    reply.appendChild(img)
}
