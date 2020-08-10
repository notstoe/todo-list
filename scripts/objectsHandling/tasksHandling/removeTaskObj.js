import { memoryObj } from '../../../src/index'
import { renderTab } from '../../DOMhandling/renderTab'

function removeTaskObj(e) {

    let arrRef = e.target.parentNode.parentNode.id;                                 
    const activeTab = document.querySelector('.activeTab');
    memoryObj.removeTask(activeTab.lastChild.textContent, arrRef);                                                          

    renderTab(0, activeTab);                                         //re-renders all tasks to update all elements ids, this way it still corresponds to the array index
}

export { removeTaskObj }