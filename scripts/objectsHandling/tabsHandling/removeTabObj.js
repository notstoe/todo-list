import { memoryObj } from '../../../src/index'

function removeTabObj(tabRef) {

    memoryObj.removeCategory(tabRef.lastChild.textContent);                         //gets the text content of the span element of the deleted tab (tab title)
}

export { removeTabObj }