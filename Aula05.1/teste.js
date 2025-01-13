console.log("O Console funcionou correctamente!")
var hora = 22
if(hora >= 0 && hora < 12){
   console.log("Bom Dia!")
   console.log(`WOW`)
   document.body.style.background = 'cyan' 
}else if( hora >= 12 && hora < 18){
    console.log("Boa tarde!")
    document.body.style.background = 'orange'
}else{
    console.log("Boa Noite!")
    document.body.style.background = 'darkblue'
}

