// CONTROLLER ///////////////////////////////////////////////////////////////////////////

function add() {
    const userInput = document.getElementById('user-input');
    let newItemValue = userInput.value;

    const newItem = {
        item: newItemValue,
        number: 1
    };

    model.data.shoppingList.push(newItem);

    newItemValue = '';
    
    
    updateView()
}

function removeAll() {
    model.data.shoppingList = []

    updateView()
}




function deleteItem(event) {

    const i = event.parentElement.id

    model.data.shoppingList.splice([i], 1)

    updateView()
}













// function add() {
//     model.userInput.newItem.item = document.getElementById('userInput').value

//     model.data.shoppingList.push(model.userInput.newItem)
//     // console.log(model.data.shoppingList)
//     updateView()
// }