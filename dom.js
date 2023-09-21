const todoForm=document.querySelector('.form-todo')
const todoInput=document.querySelector('.form-todo input[type="text"]')
const todoList=document.querySelector('.todo-list')

todoForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const newTodotext=todoInput.value;
    const newLi=document.createElement('li')
    const newLiInnerHtml=`  <span class="text">${newTodotext}</span>
    <div class="todo-buttons">
        <button class="todo-bton done" >Done</button>
        <button  class="todo-bton remove">Remove</button>
    </div>`
    newLi.innerHTML=newLiInnerHtml;
    todoList.append(newLi)
    todoInput.value=" "
})



todoList.addEventListener("click", (e) => {

    console.log(e.target.classList)
      if(e.target.classList.contains("remove")){
        const targetedLi=e.target.parentNode.parentNode;
        targetedLi.remove();
      }
      if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        console.log(liSpan);
        liSpan.style.textDecoration="line-through"
      }
})