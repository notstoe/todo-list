import { expandTask } from './expandTask';
import { markTaskDone } from './markTaskDone';
import { removeTask } from './removeTask';
import { toggleEditTaskModal } from './toggleEditTaskModal';

function createTask(dueDate, title, description) {

    const fullTask = document.createElement('div');

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
            
            const rmvTask = document.createElement('img');
                rmvTask.setAttribute('src','assets/trashcan.png');    
                rmvTask.setAttribute('id', 'rmvIcon');
                rmvTask.setAttribute('alt','Remove Task');
        
        newTask.append(checkboxDiv, date, separator, taskTitle, editTask, rmvTask);

        const taskDescript = document.createElement('p');
            taskDescript.classList.add('taskDescript', 'hideElement');
            taskDescript.textContent = description;
    
        fullTask.append(newTask, taskDescript);


    const taskContainer = document.querySelector('.taskContainer');
        taskContainer.insertBefore(fullTask, taskContainer.lastChild);        


// ADDING LISTENERS FOR ACTIONS ON A TASK

    taskTitle.addEventListener('click', expandTask);
    inputCheckBox.addEventListener('click', markTaskDone);
    rmvTask.addEventListener('click', removeTask);
    editTask.addEventListener('click', toggleEditTaskModal);
}

export { createTask }