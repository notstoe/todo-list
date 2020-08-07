import { memoryObj } from '../../src/index'
import { pageTemplate } from '../DOMhandling/loadPageTemplate'
import { createTask } from '../DOMhandling/taskHandling/createTask'

function renderTab(e, activeTabRef) {                                                                     //can be called with a reference to the current activeTab
    
    let tabTitle;

    if (!activeTabRef) {
        const tabs = document.querySelectorAll('.tab');                                                 // gets tabTitle reference either from parameter passed to function or from e.target
        tabs.forEach((tab) => {

            if (tab.classList.contains('activeTab'))  tab.classList.toggle('activeTab');

        });

        if (e.target.parentNode.classList.contains('containerTabs')){                                      //prevents the event.target from styling the whole tabsContainer Div when clicking on different html elements inside a tab

            e.target.classList.toggle('activeTab');
            tabTitle = (e.target.lastChild.textContent);
            
        } else {

            e.target.parentNode.classList.toggle('activeTab');
            tabTitle = e.target.parentNode.lastChild.textContent;        
        }
    } else {

        tabTitle = activeTabRef.lastChild.textContent;
    }

    const contentDiv = document.querySelector('#content');

        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.lastChild);
        }

        pageTemplate();
    
    const categoryArr = memoryObj.getCategoryArr(tabTitle);

    const tabIndicator = document.querySelector('#tabIndicator');
        tabIndicator.style.backgroundColor = categoryArr[0];

    const pageTitle = document.querySelector('#pageTitle');
        pageTitle.textContent = tabTitle;


    for (let i = 1; i < categoryArr.length; i++) {                                                  //skips first element (color)

        createTask(categoryArr[i].getDueDate(), categoryArr[i].getTitle(), categoryArr[i].getDescript(), i, categoryArr[i].getTaskDone());   
    }
}

export { renderTab }