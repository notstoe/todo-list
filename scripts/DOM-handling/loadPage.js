import { createTab } from "./createTab";
import { createTask } from "./createTask";
import { newTaskModal } from '../newTaskBtnModal';

function loadPage(){

    // TODO - expand with methods for localStorage retrieving data later

    const contentDiv = document.querySelector('#content');

    // TITLE AND SUBTITLE

    const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleContainer');
    
        const pageTitle = document.createElement('h1');
            pageTitle.setAttribute('id', 'pageTitle');
            pageTitle.textContent = 'To-Do';

        const tabIndicator = document.createElement('span');
            tabIndicator.setAttribute('id','tabIndicator');
            tabIndicator.style.backgroundColor = 'rgb(147, 163, 247)';

        const helpLink = document.createElement('span');
            helpLink.setAttribute('id','helpLink');
            helpLink.textContent = 'Help';

        titleDiv.append(tabIndicator, pageTitle, helpLink);

    contentDiv.appendChild(titleDiv);
        
    // NAVIGATION BAR (TABS)

        const containerTabs = document.createElement('div');
            containerTabs.classList.add('containerTabs');
    
            const editRmvDiv = document.createElement('div');
                editRmvDiv.setAttribute('id', 'editRmvDiv');

                const editBtn = document.createElement('span');
                    editBtn.classList.add('navText', 'editRmvBtn');
                    editBtn.setAttribute('id','editBtn');
                    editBtn.textContent = 'Edit';
                
                const rmvBtn = document.createElement('span');
                    rmvBtn.classList.add('navText', 'editRmvBtn');
                    rmvBtn.setAttribute('id','rmvBtn');
                    rmvBtn.textContent = 'Remove';

                editRmvDiv.append(editBtn, rmvBtn);

            const newTabBtn = document.createElement('div');
                newTabBtn.classList.add('tab');
                newTabBtn.setAttribute('id','newTabDiv');

                const newTabBtnIcon = document.createElement('img');
                    newTabBtnIcon.setAttribute('src','assets/undraw_add_file2_gvbb.svg');
                    newTabBtnIcon.setAttribute('id','newTabBtn');
                    newTabBtnIcon.classList.add('iconNav');
                
                const newTabText = document.createElement('span');
                    newTabText.classList.add('navText');
                    newTabText.textContent = 'Add New Category';

                newTabBtn.append(newTabBtnIcon, newTabText);

            containerTabs.append(editRmvDiv ,newTabBtn);

        document.body.insertBefore(containerTabs, contentDiv);

        const allTab = createTab('rgb(147, 163, 247)','All Categories');                          //creates all categories tab with reference to it (defaultTab)
        const defaultTab = createTab('green','Personal');                     //creates defaultTab with reference to it (defaultTab)
        const defaultTab1 = createTab('purple','Personal');                          //creates defaultTab with reference to it (defaultTab)


    // TASKS CONTENT

        const taskContainer = document.createElement('div');
            taskContainer.classList.add('taskContainer');

        const newTodoBtn = document.createElement('p');
            newTodoBtn.textContent = '+ Add New Task';
            newTodoBtn.setAttribute('id','newTodoBtn');
                
            taskContainer.appendChild(newTodoBtn);

        contentDiv.appendChild(taskContainer);

        createTask('23/07','I\'m a sample task, get me done!', 'testing full description');
        createTask('24/07','I\'m a sample task too, get me done!', 'testing full description');
        createTask('25/07','I\'m a sample task too, get me done!', 'testing full description');
        createTask('26/07','I\'m a sample task too, get me done!', 'testing full description');
        createTask('27/07','I\'m a sample task too, get me done!', 'testing full description testing full description testing full description testing full description testing full description testing full description');

        newTaskModal();                         //creates task modal on the DOM, hidden by default

        // EVENT LISTENERS

        newTodoBtn.addEventListener('click', () => {
                
            const taskModal = document.querySelector('.newTaskModal');
            const taskModalOverlay = document.querySelector('.newTaskModalOverlay');
           
            taskModal.classList.toggle('hideElement');
            taskModalOverlay.classList.toggle('hideElement');
        });

}

export { loadPage }