import { createMemoryObj } from '../scripts/objectsHandling/createMemoryObj'
import { newTabModal } from '../scripts/DOMhandling/modals/newTabModal'
import { newTaskModal } from '../scripts/DOMhandling/modals/newTaskModal'
import { createTabsContainer } from '../scripts/DOMhandling/tabHandling/createTabsContainer'

const memoryObj = createMemoryObj();

newTabModal();                                                              //creates modal for new tabs on the DOM
newTaskModal();                                                             //creates new task modal on the DOM, hidden by default

createTabsContainer();                                                      //initial tabs container with the default tab


// EVENT LISTENERS

export { memoryObj }



