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


// Event Listener
submitButton.addEventListener('click', register) // add data & show the output


// Function
function output () { 
    people.forEach( function (element)  {
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

    table.appendChild(tr)
    })

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
    if( 
        people.filter (
            element => {
                return element.name === nameInput.value
            }
        )
    ) {
        alert('your name already registered')
    } else
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

function deleteData (e) {
        if(confirm('Are you sure want to delete this?')) {
            var tableBody = this.parentNode.parentNode.parentNode
            var deleteRow = this.parentNode.parentNode
            var nameValue = deleteRow.firstChild.firstChild.wholeText
            
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