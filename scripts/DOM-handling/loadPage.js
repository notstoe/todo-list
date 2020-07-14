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
        
                const newTabButton = document.createElement('p');
                    newTabButton.textContent = '+';
                    newTabButton.classList.add('tab');
                    newTabButton.setAttribute('id', 'newTabBtn');

                    containerTabs.appendChild(newTabButton);

                const defaultAllTab = document.createElement('p');
                    defaultAllTab.textContent = 'All Categories';
                    defaultAllTab.classList.add('tab');

                    containerTabs.insertBefore(defaultAllTab, newTabButton);

                containerTabContent.appendChild(containerTabs);

            contentDiv.appendChild(containerTabContent);


        //TODO - POPULATE TAB CONTENT
        // call renderTab.js later
            const tabContent = document.createElement('div');
                tabContent.classList.add('tabContent');
                containerTabContent.appendChild(tabContent);

        //TODO - ADD NEW TODO BUTTON

        // logic for generating the button initially
        // call DOM-handling/modalNewButton.js when clicked

}

export { loadPage }