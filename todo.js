let todolist = [];
displayItems();
function Attfunction(){
  
    let textenterbox = document.querySelector('#toenter');
    let textenter = textenterbox.value;
    if(!textenter)
    {
        textenter = "None ";
    }

    let dateenterbox = document.querySelector('#todo-date');
    let dateenter = dateenterbox.value;
    if (!dateenter) {
        dateenter = getTodayDate();
    }

    todolist.push({item:textenter,date:dateenter});
    textenterbox.value = '';
    // localStorage.setItem({item:textenter,date:dateenter});
    displayItems();

}
function getTodayDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let day = String(today.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}
function displayItems()
{
    let containerElement = document.querySelector('.todo-container');
    let newHTML = '';

    for(let i = 0; i < todolist.length ; i++)
    {
        newHTML += `
        
        <span>${todolist[i].item}</span>
        <span>${todolist[i].date}</span>
        <button class="addtolist delete-button" onclick="todolist.splice(${i},1);
        displayItems()">Delete &#128465;&#65039;</button>
        
        `;
    }
    containerElement.innerHTML = newHTML;
}
function clearall()
{
   todolist = [];
   displayItems();
   
}


