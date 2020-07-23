import { loadPage } from '../scripts/DOM-handling/loadPage'
import { removeTab } from '../scripts/DOM-handling/removeTab'
import { expandTask } from '../scripts/DOM-handling/expandTask'


loadPage();

// event listener for deleting tabs
const rmvBtn = document.querySelector('#rmvBtn');
rmvBtn.addEventListener('click', removeTab);

const tasks = document.querySelectorAll('#taskTitle');

tasks.forEach((task) => { task.addEventListener('click', expandTask) });