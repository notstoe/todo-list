import { memoryObj } from '../../../src/index'

function taskDone(e) {

    const activeTab = document.querySelector('.activeTab');
    let arrRef = e.target.parentNode.parentNode.parentNode.id;

    let activeTasks = memoryObj.getCategoryArr(activeTab.lastChild.textContent);
        activeTasks[arrRef].setTaskDone();

}

export { taskDone }