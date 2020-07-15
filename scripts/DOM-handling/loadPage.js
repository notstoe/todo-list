import { createTab } from "./createTab";

function loadPage(){

    // TODO - expand with methods for localStorage retrieving data later

    const contentDiv = document.querySelector('#content');

    // TITLE AND SUBTITLE

    const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleContainer');
    
        const pageTitle = document.createElement('h1');
            pageTitle.setAttribute('id', 'pageTitle');
            pageTitle.textContent = 'To-Do';

        const subtitle = document.createElement('h2');
            subtitle.textContent = 'Your own personal To-Do list!';
            subtitle.setAttribute('id', 'subtitle');

        titleDiv.append(pageTitle, subtitle);

    contentDiv.appendChild(titleDiv);
        
    // NAVIGATION BAR (TABS)

        const containerTabs = document.createElement('div');
            containerTabs.classList.add('containerTabs');
    
            const newTabBtn = document.createElement('div');
                newTabBtn.classList.add('tab');

                const newTabBtnIcon = document.createElement('img');
                    newTabBtnIcon.setAttribute('src','assets/undraw_add_file2_gvbb.svg');
                    newTabBtnIcon.setAttribute('id','newTabBtn');
                    newTabBtnIcon.classList.add('iconNav');
                
                const newTabText = document.createElement('span');
                    newTabText.classList.add('navText');
                    newTabText.textContent = 'Add New Category';

                newTabBtn.append(newTabBtnIcon, newTabText);

            containerTabs.appendChild(newTabBtn);

        document.body.insertBefore(containerTabs, contentDiv);

        createTab('red','All Categories');                          //creates defaultTab


    //TODO - POPULATE TAB CONTENT
    // call renderTab.js later

        const tabContent = document.createElement('div');
            tabContent.classList.add('tabContent');
                
        // const sampleTask = document.createElement('div');
        //     sampleTask.textContent = 'I\'m a sample task, get me done!';
        // TODO - add sample task to style it

        const newTodoBtn = document.createElement('p');
            newTodoBtn.textContent = '+ Add New Task';
            newTodoBtn.setAttribute('id','newTodoBtn');
                
            tabContent.appendChild(newTodoBtn);

        contentDiv.appendChild(tabContent);

        // call DOM-handling/modalNewButton.js when clicked

}

export { loadPage }