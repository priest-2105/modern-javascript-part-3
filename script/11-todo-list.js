const todoInput_El = document.querySelector('.todo-input');
const todoButton_El = document.querySelector('.todo-button');
const todoParagraph_El = document.querySelector('.todo-paragraph');
const todoParagraphDiv_El = document.querySelector('.todo-paragraph-div');
const todoDateDiv_El = document.querySelector('.todo-date');


 const todoList = [{
  name:'make dinner',
  dueDate: '2022-12-22'
  },
  {
  name:'Wash Dishes',
  dueDate: '2024-02-02'
 }
];

renderTodoList();

 function renderTodoList(){
  
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {


      const todo = todoList[i];
      
      const { name , dueDate } = todo;

      const html = `
       <div> ${name}  </div>  
       <div> ${dueDate} </div>  
          <button 
          class="delete-btn"
          onClick="
            todoList.splice(${i}, 1);
            renderTodoList();
          ">Delete</button>
          `;

      todoListHTML += html;

      todoParagraphDiv_El.innerHTML = todoListHTML;
      
    }
 }

function addTodoList(){

        const nameValue = todoInput_El.value;
        const dateValue = todoDateDiv_El.value;
        
        const todoData = { name : nameValue, dueDate: dateValue }
 
       todoList.push(todoData);
       renderTodoList();
    
}

todoButton_El.addEventListener('click', () => {

    addTodoList();
    todoInput_El.value = '';
    todoDateDiv_El.value = '';
})