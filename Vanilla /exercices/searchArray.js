function searchArray(wordsArray){
    //const wordsArray = [, 'guide', 'live', '-1'];

    for(let i = 0; i < wordsArray.length; i++){
        const word = wordsArray[i];
        if(word === 'search'){
            console.log(wordsArray[i])
        } else{
            console.log('-1')
        }
        
    }
}
searchArray(['not']);