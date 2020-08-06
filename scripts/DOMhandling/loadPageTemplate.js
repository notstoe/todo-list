import { toggleNewTaskModal } from './modals/newTaskModal';
import { toggleNewTabModal } from './modals/newTabModal'
import { removeTab } from './tabHandling/removeTab'
import { createTab } from './tabHandling/createTab'
import { memoryObj } from '../../src/index'

function pageTemplate(){

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

    // FIXME - change it so it generates tabs only once
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

        createTab('#93a3f7','To-do');                                          //DOM - default category tab
        memoryObj.createNewCategory('#93a3f7','To-do');                        //Memory - default category tab


    // TABS EVENT LISTENERS
    
        rmvBtn.addEventListener('click', removeTab);

        newTabBtn.addEventListener('click', toggleNewTabModal);


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