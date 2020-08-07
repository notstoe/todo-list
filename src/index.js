import { pageTemplate } from '../scripts/DOMhandling/loadPageTemplate'
import { categoriesHandling } from '../scripts/objectsHandling/categoriesHandling'
import { newTabModal } from '../scripts/DOMhandling/modals/newTabModal'
import { newTaskModal } from '../scripts/DOMhandling/modals/newTaskModal'
import { createTabsContainer } from '../scripts/DOMhandling/tabHandling/createTabsContainer'

const memoryObj = categoriesHandling();

newTabModal();                                                              //creates modal for new tabs on the DOM
newTaskModal();                                                             //creates new task modal on the DOM, hidden by default

createTabsContainer();                                                      //initial tabs container


// EVENT LISTENERS

export { memoryObj }



