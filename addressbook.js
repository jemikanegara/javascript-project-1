// Registered Citizen       
people = [{
    name : 'patrick',
    address : 'under a stone',
    email : 'patrickstar@bikinibottom.com',
    phone : '081-090-090-090'
}, 
{
    name : 'sandy',
    address : 'under a tree',
    email : 'sandycheek@bikinibottom.com',
    phone : '087-080-080-080'
},
{
    name : 'spongebob',
    address : 'in the pineapple house',
    email : 'spongebob@bikinibottom.com',
    phone : '089-209-209-209'
},
{
    name : 'mrcrab',
    address : 'krusty crab street',
    email : 'mrcrab@bikinibottom.com',
    phone : '082-080-909-900'
}]

// Element
nameInput = document.getElementById('nameInput')
addressInput = document.getElementById('addressInput')
emailInput = document.getElementById('emailInput')
phoneInput = document.getElementById('phoneInput')
submitButton = document.querySelector("input[type='submit']")
error = document.getElementById('error')
table = document.getElementById('book')
searchInput = document.getElementById('search')


// Event Listener
submitButton.addEventListener('click', register) // add data & show the output
searchInput.addEventListener('keyup', searching)


// Function
function output () { 
    people.forEach( function (element, index)  {
    var tr = document.createElement('tr')

    var tdName = document.createElement('td')
    tdName.className = 'name'
    var tdAddress = document.createElement('td')
    tdAddress.className = 'address'
    var tdEmail = document.createElement('td')
    tdEmail.className = 'email'
    var tdPhone = document.createElement('td')
    tdPhone.className = 'phone'
    var tdEdit = document.createElement('td')
    var tdDelete = document.createElement('td')

    var createName = document.createTextNode(element.name)
    var createAddress = document.createTextNode(element.address)
    var createEmail = document.createTextNode (element.email)
    var createPhone = document.createTextNode(element.phone)

    var editBtn = document.createElement('button')
    var editTxt = document.createTextNode('Edit')
    editBtn.appendChild(editTxt)
    editBtn.className = 'edit'

    var deleteBtn = document.createElement('button')
    var deleteTxt = document.createTextNode('X')
    deleteBtn.appendChild(deleteTxt)
    deleteBtn.className = 'delete'

    tdName.appendChild(createName)
    tdAddress.appendChild(createAddress)
    tdEmail.appendChild(createEmail)
    tdPhone.appendChild(createPhone)
    tdEdit.appendChild(editBtn)
    tdDelete.appendChild(deleteBtn)

    tr.appendChild(tdName)
    tr.appendChild(tdAddress)
    tr.appendChild(tdEmail)
    tr.appendChild(tdPhone)
    tr.appendChild(tdEdit)
    tr.appendChild(tdDelete)
    tr.setAttribute(`id`, `${index}`)

    table.appendChild(tr)
    })

    editButton = document.querySelectorAll('.edit')
    
    editButton.forEach (
        element => {
            element.addEventListener('click', editData)
        }
    )

    deleteButton = document.querySelectorAll('.delete')

    deleteButton.forEach(
        element => {
        element.addEventListener('click', deleteData)
        }
    )


}

output () // call the output for the initial page load

function register (event) {
    event.preventDefault()
    // var duplicate = people.filter (
    //     element => {
    //         return element.name === nameInput.value
    //     }
    // )
    // console.log(duplicate)
    // if( 
    //     duplicate === true
    // ) {
    //     alert('your name already registered')
    // } else
    if (nameInput.value !== "" && addressInput.value !== "" && emailInput.value !== "" && phoneInput.value !== "") {
    table.innerHTML = ""

    let newPerson = {
    name : nameInput.value,
    address : addressInput.value,
    email : emailInput.value,
    phone : phoneInput.value
    }

    people.push(newPerson) // add new citizen to the array of people
    output() // show new output after new citizen successfully added

    } else  {
    alert('please complete all the field') // alert if there is any input unfulfilled
    }
}

function editData () {
    let trEdit = this.parentNode.parentNode
    
    let nameEdit = trEdit.children[0].textContent
    let addressEdit = trEdit.children[1].textContent
    let emailEdit = trEdit.children[2].textContent
    let phoneEdit = trEdit.children[3].textContent
    
    editName = `<td><input type="text" class="editInput" placeholder="${nameEdit}"></td>`
    editAddress = `<td><input type="text" class="editInput" placeholder="${addressEdit}"></td>`
    editEmail = `<td><input type="text" class="editInput" placeholder="${emailEdit}"></td>`
    editPhone = `<td><input type="text" class="editInput" placeholder="${phoneEdit}"></td>`
    editSave = `<td><button class="saveEdit">SAVE</button></td>`
    editCancel = `<td><button class="cancelEdit">CANCEL</button></td>`
    trEdit.innerHTML = editName+editAddress+editEmail+editPhone+editSave+editCancel

    cancelEdit = document.querySelectorAll('.cancelEdit')
    cancelEdit.forEach(
        element => {
            element.addEventListener('click', cancelData)
        }
    )

    function cancelData () {

    cancelName = `<td>${nameEdit}</td>`
    cancelAddress = `<td>${addressEdit}</td>`
    cancelEmail = `<td>${emailEdit}</td>`
    cancelPhone = `<td>${phoneEdit}</td>`
    cancelEdit = `<td><button class="edit">Edit</button></td>`
    cancelDelete = `<td><button class="delete">X</button></td>`
    
    trEdit.innerHTML = cancelName+cancelAddress+cancelEmail+cancelPhone+cancelEdit+cancelDelete

        editButton = document.querySelectorAll('.edit')
        
        editButton.forEach (
            element => {
                element.addEventListener('click', editData)
            }
        )

        deleteButton = document.querySelectorAll('.delete')

        deleteButton.forEach(
            element => {
            element.addEventListener('click', deleteData)
            }
        )
    }

    saveEdit = document.querySelectorAll('.saveEdit')

    saveEdit.forEach(
        (element) => {
            element.addEventListener('click', saveData)
        }
    )

    function saveData () {
        let trSave = this.parentNode.parentNode.children
        let nameValue = trSave[0].children[0].value
        let addressValue = trSave[1].children[0].value
        let emailValue = trSave[2].children[0].value
        let phoneValue = trSave[3].children[0].value
        
        // people[this.parentNode]
        people[this.parentNode.parentNode.id].name = nameValue
        people[this.parentNode.parentNode.id].address = addressValue
        people[this.parentNode.parentNode.id].email = emailValue
        people[this.parentNode.parentNode.id].phone = phoneValue

        if (nameValue != "" && addressValue != "" && emailValue != "" && phoneValue != ""){
            saveName = `<td>${nameValue}</td>`
            saveAddress = `<td>${addressValue}</td>`
            saveEmail = `<td>${emailValue}</td>`
            savePhone = `<td>${phoneValue}</td>`
            saveEdit = `<td><button class="edit">Edit</button></td>`
            saveDelete = `<td><button class="delete">X</button></td>`
            trEdit.innerHTML = saveName+saveAddress+saveEmail+savePhone+saveEdit+saveDelete

            editButton = document.querySelectorAll('.edit')
        
            editButton.forEach (
                element => {
                    element.addEventListener('click', editData)
                }
            )
    
            deleteButton = document.querySelectorAll('.delete')
    
            deleteButton.forEach(
                element => {
                element.addEventListener('click', deleteData)
                }
            )
        } else {
            alert('all edit field must be fulfilled')
        }
    }
}




function deleteData (e) {
        if(confirm('Are you sure want to delete this?')) {
            var tableBody = this.parentNode.parentNode.parentNode
            var deleteRow = this.parentNode.parentNode
            var nameValue = deleteRow.firstChild.firstChild.textContent
            
            people.forEach(
                (element) => {
                    if(element.name == nameValue){
                        var index = people.findIndex(
                            element => element.name === nameValue
                        )
                        people.splice(index, 1)
                    } 
                }
            )
            tableBody.removeChild(deleteRow)
        }
}

function searching (event) {
    console.log(event.target.value)
    var searchData = event.target.value
    people.forEach (
        (element) => {
            var trResult = table.children
            for(i=0; i<trResult.length; i++){
                var tdResult = trResult[i].children
                var nameContent = tdResult[0].textContent
                var addressContent = tdResult[1].textContent
                var emailContent = tdResult[2].textContent
                var phoneContent = tdResult[3].textContent

                if(nameContent.indexOf(searchData) !== -1 || addressContent.indexOf(searchData) !== -1 || emailContent.indexOf(searchData) !== -1 || phoneContent.indexOf(searchData) !== -1 ){
                    trResult[i].style.display = 'table-row'
                    if(element.name.indexOf(searchData) !== -1 || element.address.indexOf(searchData) !== -1 || element.email.indexOf(searchData) !== -1 || element.phone.indexOf(searchData) !== -1) {
                        console.log(`search result 'name : ${element.name}, address : ${element.address}. email : ${element.email}, phone : ${element.phone}`)
                        
                    }
                } else {
                    trResult[i].style.display = 'none'
                }

            }
        }
    )
}