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
        
    // TODO - NAVIGATION BAR (TABS)

        const containerTabs = document.createElement('div');
            containerTabs.classList.add('containerTabs');
    
            const navElement1 = document.createElement('div');
                navElement1.classList.add('tab');

                const defaultTabIcon = document.createElement('a');
                    defaultTabIcon.style.backgroundColor = 'red';
                    defaultTabIcon.classList.add('iconNav');
                
                const defaultTabText = document.createElement('span');
                    defaultTabText.classList.add('navText');
                    defaultTabText.textContent = 'All Categories';

                navElement1.append(defaultTabIcon, defaultTabText);

            const navElement2 = document.createElement('div');
                navElement2.classList.add('tab');

                const newTabBtnIcon = document.createElement('img');
                    newTabBtnIcon.setAttribute('src','assets/undraw_add_file2_gvbb.svg');
                    newTabBtnIcon.setAttribute('id','newTabBtn');
                    newTabBtnIcon.classList.add('iconNav');
                
                const newTabText = document.createElement('span');
                    newTabText.classList.add('navText');
                    newTabText.textContent = 'Add New Category';

                navElement2.append(newTabBtnIcon, newTabText);

            containerTabs.append(navElement1, navElement2);

        document.body.insertBefore(containerTabs, contentDiv);


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