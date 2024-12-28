const todoInput_El = document.querySelector('.todo-input');
const todoButton_El = document.querySelector('.todo-button');
const todoParagraph_El = document.querySelector('.todo-paragraph');
const todoParagraphDiv_El = document.querySelector('.todo-paragraph-div');


 const todoList = [];


 function renderTodoList(){
  
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {

      const todo = todoList[i];

      const html = `<p> ${todo}</p>`;

      todoListHTML += html;

      todoParagraphDiv_El.innerHTML = todoListHTML;
      
    }
 }

function addTodoList(){

       todoList.push(todoInput_El.value);
       renderTodoList();
    
}

todoButton_El.addEventListener('click', () => {

    addTodoList();
    todoInput_El.value = '';
})