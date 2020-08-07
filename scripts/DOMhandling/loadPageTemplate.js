import { toggleNewTaskModal } from './modals/newTaskModal';

function pageTemplate(){

    const contentDiv = document.querySelector('#content');

    // TITLE AND SUBTITLE

    const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleContainer');
    
        const pageTitle = document.createElement('h1');
            pageTitle.setAttribute('id', 'pageTitle');
            pageTitle.textContent = 'To-do';

        const tabIndicator = document.createElement('span');
            tabIndicator.setAttribute('id','tabIndicator');
            tabIndicator.style.backgroundColor = 'rgb(147, 163, 247)';

        const helpLink = document.createElement('span');
            helpLink.setAttribute('id','helpLink');
            helpLink.textContent = 'Help';

        titleDiv.append(tabIndicator, pageTitle, helpLink);

    contentDiv.appendChild(titleDiv);

    // TASKS CONTENT

        const taskContainer = document.createElement('div');
            taskContainer.classList.add('taskContainer');

        const newTodoBtn = document.createElement('p');
            newTodoBtn.textContent = '+ Add New Task';
            newTodoBtn.setAttribute('id','newTodoBtn');
                
            taskContainer.appendChild(newTodoBtn);

        contentDiv.appendChild(taskContainer);

        // EVENT LISTENERS

        newTodoBtn.addEventListener('click', toggleNewTaskModal);

}

export { pageTemplate }