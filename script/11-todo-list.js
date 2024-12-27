const todoInput_El = document.querySelector('.todo-input');
const todoButton_El = document.querySelector('.todo-button');
const todoParagraph_El = document.querySelector('.todo-paragraph');


 const todoArr = [];

function addTodoList(){


      for (let i = 0; i < todoArr.length; i++) {
        todoArr.push(todoInput_El.value);
    
        const paragraph =  document.createElement('p');
          paragraph.innerHTML = todoArr[i];
          todoParagraph_El.appendChild(paragraph);
        
          console.log(todoArr[i]);
     
        } 
       
}

todoButton_El.addEventListener('click', () => {

    addTodoList();
    todoInput_El.value = '';
})