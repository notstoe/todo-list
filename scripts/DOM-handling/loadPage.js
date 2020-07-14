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

    // CONTAINER FOR TAB CONTENT + TABS

        const containerTabContent = document.createElement('div');
            containerTabContent.classList.add('containerTabContent');

            //TODO - NAVIGATION BAR (TABS)

            const containerTabs = document.createElement('div');
                containerTabs.classList.add('containerTabs');
        
                const newTabBtn = document.createElement('p');
                    newTabBtn.textContent = '+';
                    newTabBtn.classList.add('tab');
                    newTabBtn.setAttribute('id', 'newTabBtn');

                    containerTabs.appendChild(newTabBtn);

                const defaultAllTab = document.createElement('p');
                    defaultAllTab.textContent = 'All Categories';
                    defaultAllTab.classList.add('tab');

                    containerTabs.insertBefore(defaultAllTab, newTabBtn);

                containerTabContent.appendChild(containerTabs);

            contentDiv.appendChild(containerTabContent);


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

                containerTabContent.appendChild(tabContent);

        // call DOM-handling/modalNewButton.js when clicked

}

export { loadPage }