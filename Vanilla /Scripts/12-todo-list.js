const todoList = [/*{name:'', dueDate:'' }*/ ];
renderTodoList();

document.querySelector('.js-add-to-do').addEventListener('click', () => addTodo());
document.querySelector('.js-input-name').addEventListener('keydown', event => {
    console.log(event.key)
    if(event.key === 'Enter'){
        addTodo();
    }
})
document.querySelector('.js-delete').addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
})

function renderTodoList(){
    let todoListHtml = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject
        const html = 
        `
        <div class="paragraph">${name}</div>
        <div class="paragraph">${dueDate}</div>
         <button class="js-delete">Delete</button>
        `
        todoListHtml += html
        

        document.querySelector('div.content').innerHTML= todoListHtml
    })
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