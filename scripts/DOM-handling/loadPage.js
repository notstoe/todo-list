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

        const tabIndicator = document.createElement('span');
            tabIndicator.setAttribute('id','tabIndicator');
            tabIndicator.style.backgroundColor = 'red';
            tabIndicator.addEventListener('click',() => tabIndicator.style.backgroundColor = 'green');

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

        const allTab = createTab('red','All Categories');                          //creates all categories tab with reference to it (defaultTab)
        const defaultTab = createTab('green','Personal');                     //creates defaultTab with reference to it (defaultTab)
        const defaultTab1 = createTab('purple','Personal');                          //creates defaultTab with reference to it (defaultTab)
        const defaultTab2 = createTab('yellow','Personal');                          //creates defaultTab with reference to it (defaultTab)
        const defaultTab3 = createTab('blue','Personal');                          //creates defaultTab with reference to it (defaultTab)
        const defaultTab4 = createTab('orange','Personal');                          //creates defaultTab with reference to it (defaultTab)
        const defaultTab5 = createTab('rgb(255,255,255)','Personal');                          //creates defaultTab with reference to it (defaultTab)
        const defaultTab6 = createTab('rgb(0,255,221)','Personal');                          //creates defaultTab with reference to it (defaultTab)
        const defaultTab7 = createTab('rgb(199,80,0)','Personal');                          //creates defaultTab with reference to it (defaultTab)
        const defaultTab8 = createTab('rgb(252,65,168)','Personal');                          //creates defaultTab with reference to it (defaultTab)


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