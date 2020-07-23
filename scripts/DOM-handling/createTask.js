
function createTask(dueDate, title) {

    const newTask = document.createElement('div');
        newTask.classList.add('taskDiv');

    const checkboxDiv = document.createElement('div');
        checkboxDiv.setAttribute('id', 'checkbox');
        checkboxDiv.classList.add('pretty', 'p-round', 'p-tada');

        const inputCheckBox = document.createElement('input');
            inputCheckBox.setAttribute('type','checkbox');

        const stateDiv = document.createElement('div');
            stateDiv.classList.add('state', 'p-info');
            const emptyLabel = document.createElement('label');
            stateDiv.appendChild(emptyLabel);

        checkboxDiv.append(inputCheckBox, stateDiv);

    const date = document.createElement('span');
        date.textContent = dueDate;
        date.setAttribute('id','dueDate');

    const separator = document.createTextNode('\xa0\xa0-\xa0\xa0');                     //to separate date from title

    const taskTitle = document.createElement('span');
        taskTitle.textContent = title;
        taskTitle.setAttribute('id', 'taskTitle');

    const editTask = document.createElement('img');
        editTask.setAttribute('src','assets/pencil-edit-button.png');
        editTask.setAttribute('id', 'editIcon');
        editTask.setAttribute('alt','Edit Task');
    
    const removeTask = document.createElement('img');
        removeTask.setAttribute('src','assets/trashcan.png');    
        removeTask.setAttribute('id', 'rmvIcon');
        removeTask.setAttribute('alt','Remove Task');

        
    newTask.append(checkboxDiv, date, separator, taskTitle, editTask, removeTask);
    
    const taskContainer = document.querySelector('.taskContainer');
        taskContainer.insertBefore(newTask, taskContainer.lastChild);        
}

export { createTask }