// creates new tab on the DOM

import { renderTab } from '../renderTab'
import { pageTemplate } from '../loadPageTemplate'

function createTab(color, title){

    const navElement = document.createElement('div');
        navElement.classList.add('tab');

        const tabIcon = document.createElement('a');
            tabIcon.style.backgroundColor = color;
            tabIcon.classList.add('iconNav');
        
        const tabTitle = document.createElement('span');
            tabTitle.classList.add('navText');
            tabTitle.textContent = title;

        navElement.append(tabIcon, tabTitle);


    const referenceNavBar = document.querySelector('.containerTabs');
        referenceNavBar.insertBefore(navElement, referenceNavBar.lastChild);


    const tabs = document.querySelectorAll('.tab');                                                 // removes any active tab to make this new created one, the active one  
        tabs.forEach((tab) => {
    
            if (tab.classList.contains('activeTab'))  tab.classList.toggle('activeTab');
    
        });

    navElement.classList.add('activeTab');


    const contentDiv = document.querySelector('#content');                                          // re-renders the page to go to new empty tab

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    pageTemplate();

    const tabIndicator = document.querySelector('#tabIndicator');
        tabIndicator.style.backgroundColor = color;

    const pageTitle = document.querySelector('#pageTitle');
        pageTitle.textContent = title;

    // LISTENER

    navElement.addEventListener('click', renderTab);
}

export { createTab }