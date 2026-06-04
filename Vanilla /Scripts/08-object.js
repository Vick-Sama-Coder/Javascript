        let obj = {
            nome:"Vickel",
            idade:18,
            sexo:"Masculino",
            profissao:"Dev"
        };
        // Comparing references of the objects
        let obj2 = obj;
        let obj3 = {
            nome:"Vickel",
            idade:18,
            sexo:"Masculino",
            profissao:"Dev"
        }
        console.log(obj2 === obj)
        console.log(obj3 == obj)

        //Shortcuts for Objects

        //Destructuring 
        const {nome, sexo, profissao} = obj
        console.log(nome)

        //Shorthand Propertie
        const obj5 = { 
            nome
        }
        console.log(profissao)

        //Shorthand Method
        const obj6 = {
            /*method: function play(){
                console.log('Method')
            }*/
            method(){
                console.log('meta')
            }
                
        }
        obj6.method();