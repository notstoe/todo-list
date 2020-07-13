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

    //TODO - NAVIGATION BAR (TABS)


    //TODO - POPULATE CURRENT TAB
        // call renderTab.js

    //TODO - ADD NEW TODO BUTTON

        // logic for generating the button initially
        // call DOM-handling/modalNewButton.js when clicked

}

export { loadPage }