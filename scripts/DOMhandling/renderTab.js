import { memoryObj } from '../../src/index'
import { pageTemplate } from '../DOMhandling/loadPageTemplate'

function renderTab(e) {
    
    const contentDiv = document.querySelector('#content');
    const containerTabs = document.querySelector('.containerTabs');
    
    document.body.removeChild(containerTabs);

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    pageTemplate();

    // const tabTitle = (e.target.lastChild.textContent);

    // const categoryArr = memoryObj.getCategoryArr(tabTitle);

    // for (let i = 0; i < array.length; i++) {
    //     categoryArr[i];
        
    // }
}

export { renderTab }