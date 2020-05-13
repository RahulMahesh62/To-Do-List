var list = document.getElementById('todo-list')
var inputBox = document.getElementById('todo-input')
var btnclick = document.getElementById('add-item')

var currInputValue = ''
inputBox.addEventListener('input', function(e) {
    currInputValue = e.target.value;
});

function toDo() {
    if (currInputValue !== undefined && currInputValue !== null && currInputValue !== '') {
        var newElement = document.createElement('li')
        var textNode = document.createTextNode(currInputValue)
        newElement.appendChild(textNode)
        newElement.id = 'item'

        list.appendChild(newElement)
        console.log(list.childElementCount)

        inputBox.value = ''
        currInputValue = ''

    } else {
        alert('Enter a valid list item')
    }
}

inputBox.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        toDo();
    }
})

btnclick.addEventListener('click', toDo);