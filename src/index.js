import { loadPage } from '../scripts/DOMhandling/loadPage'
import { categoriesHandling } from '../scripts/objectsHandling/categoriesHandling'


loadPage();

const memoryObj = categoriesHandling();

// EVENT LISTENERS

export { memoryObj }



