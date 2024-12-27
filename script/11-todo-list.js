const todoInput_El = document.querySelector('.todo-input');
const todoButton_El = document.querySelector('.todo-button');
const todoParagraph_El = document.querySelector('.todo-paragraph');


 const todoArr = [];

function addTodoList(){

      todoArr.push(todoInput_El.value);

      for (let i = 0; i < todoArr.length; i++) {
       todoParagraph_El.innerHTML = todoArr;     
      }
       console.log(todoArr);
       
}

todoButton_El.addEventListener('click', () => {

    addTodoList();
    todoInput_El.value = '';
})