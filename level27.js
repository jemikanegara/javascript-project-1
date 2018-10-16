toDoList = []

button = document.getElementById('todo')

button.addEventListener('click', inputToDo)

function inputToDo () {
    var todo = prompt('input next to do')
    if (todo != null) {
        toDoList.push(todo)
        toDoList.forEach(element => {
            console.log(element)
        });
    }

}
