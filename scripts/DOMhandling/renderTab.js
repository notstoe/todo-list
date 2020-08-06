import { memoryObj } from '../../src/index'
import { pageTemplate } from '../DOMhandling/loadPageTemplate'
import { createTask } from '../DOMhandling/taskHandling/createTask'

function renderTab(e) {
    
    // TODO - CSS STYLING

    // const tabs = document.querySelectorAll('.tab');                             
    // tabs.forEach((tab) => {

    //     if (tab.classList.contains('activeTab'))  tab.classList.toggle('activeTab');

    // });

    // Rendering new tab content

    const contentDiv = document.querySelector('#content');
    const containerTabs = document.querySelector('.containerTabs');
    
    document.body.removeChild(containerTabs);

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    pageTemplate();

    // e.target.classList.toggle('activeTab');

    const tabTitle = (e.target.lastChild.textContent);

    const categoryArr = memoryObj.getCategoryArr(tabTitle);

    // TODO - finish renderTab function, loops through the category array and renders tasks

    // for (let i = 1; i < categoryArr.length; i++) {                                                  //skips first element (color)
        
    //     categoryArr[i];

    //     createTask(categoryArr[i].)
        
    // }
}

export { renderTab }