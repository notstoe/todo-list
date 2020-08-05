import { pageTemplate } from '../scripts/DOMhandling/loadPageTemplate'
import { categoriesHandling } from '../scripts/objectsHandling/categoriesHandling'
import { createTab } from '../scripts/DOMhandling/tabHandling/createTab'
import { newTabModal } from '../scripts/DOMhandling/modals/newTabModal'
import { newTaskModal } from '../scripts/DOMhandling/modals/newTaskModal'

const memoryObj = categoriesHandling();

newTabModal();                                                              //creates modal for new tabs on the DOM
newTaskModal();                                                             //creates new task modal on the DOM, hidden by default

pageTemplate();

createTab('#93a3f7','To-do');                                          //DOM - default category tab
memoryObj.createNewCategory('#93a3f7','To-do');                        //Memory - default category tab


// EVENT LISTENERS

export { memoryObj }



