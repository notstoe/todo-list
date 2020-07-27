import { loadPage } from '../scripts/DOM-handling/loadPage'
import { removeTab } from '../scripts/DOM-handling/removeTab'


loadPage();

// event listener for deleting tabs
const rmvBtn = document.querySelector('#rmvBtn');
rmvBtn.addEventListener('click', removeTab);

