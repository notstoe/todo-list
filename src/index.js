import { createMemoryObj } from '../scripts/objectsHandling/createMemoryObj'
import { newTabModal } from '../scripts/DOMhandling/modals/newTabModal'
import { newTaskModal } from '../scripts/DOMhandling/modals/newTaskModal'
import { createTabsContainer } from '../scripts/DOMhandling/tabHandling/createTabsContainer'
import { editTabModal } from '../scripts/DOMhandling/modals/editTabModal';
import { helpModal } from '../scripts/DOMhandling/modals/helpModal';
import { renderDataLS, saveDataLS } from '../scripts/localStorageHandling'

let storageLS = window.localStorage;

const memoryObj = createMemoryObj();

newTabModal();                                                              //creates modal for new tabs in the DOM
newTaskModal();                                                             //creates new task modal in the DOM, hidden by default
editTabModal();                                                             //creates tab editing modal in the DOM, hidden by default
helpModal();

createTabsContainer();                                                      //initial tabs container with the default tab


// EVENT LISTENERS

window.addEventListener('load', renderDataLS);
window.addEventListener('unload', saveDataLS);

export { memoryObj, storageLS }



