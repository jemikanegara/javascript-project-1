toDoList = []

todoBtn = document.getElementById('todo')
searchBtn = document.getElementById('search')

todoBtn.addEventListener('click', inputToDo)
searchBtn.addEventListener('click', searchToDo)

function inputToDo () {
    var todo = prompt('input next to do')
    if (todo != null) {
        toDoList.push(todo)
        toDoList.forEach((element) => {
            console.log(element)
        });
    }

}

function searchToDo () {
    var search = prompt('search your task')
    
    if (search != '') {
        for (i=0; i<toDoList.length; i++){
            if(toDoList[i].includes(search) === true){
                console.log(`search result : ${toDoList[i]}`)
            } else {
                console.log('search result not found')
            }
        }
    } else {
        alert('input cannot be empty')
    }
}