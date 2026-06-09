const todoList = [/*{name:'', dueDate:'' }*/ ];
renderTodoList();

function renderTodoList(){
    let todoListHtml = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i]
        //Here Using the Destructuring for objects
        const { name, dueDate } = todoObject
        const html = 
        `
        <div>${name}</div>
        <div>${dueDate}</div>
         <button class="js-delete" onclick=" 
            todoList.splice(${i}, 1);
            renderTodoList();
         ">Delete</button>
        `
        todoListHtml += html
        

        document.querySelector('div.content').innerHTML= todoListHtml
    }
}


function addTodo(){
    const inputName = document.querySelector('.js-input-name');
    const name = inputName.value;
    const inputDate = document.querySelector('.js-due-date-input');
    const dueDate = inputDate.value
    

    todoList.push({
        //Here I am using a ShortHand Propertie for Objects
        name,
        dueDate
    })
    inputName.value = ''

    console.log(todoList)
    renderTodoList();
    
}

/*
function useKey (){
    console.log(Event.key)

    if(Event.key === 'Enter'){
        addTodo();
    }
}
*/