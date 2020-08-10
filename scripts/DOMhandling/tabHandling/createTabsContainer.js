import { removeTab } from './removeTab'
import { toggleNewTabModal } from '../modals/newTabModal'
import { createTab } from './createTab' 
import { memoryObj } from '../../../src/index'
import { removeTabObj } from '../../objectsHandling/tabsHandling/removeTabObj';

// NAVIGATION BAR (TABS)

function createTabsContainer() {
    const containerTabs = document.createElement('div');
        containerTabs.classList.add('containerTabs');

    const editRmvDiv = document.createElement('div');
        editRmvDiv.setAttribute('id', 'editRmvDiv');

        const editBtn = document.createElement('span');
            editBtn.classList.add('navText', 'editRmvBtn');
            editBtn.setAttribute('id','editBtn');
            editBtn.textContent = 'Edit';
        
        const rmvBtn = document.createElement('span');
            rmvBtn.classList.add('navText', 'editRmvBtn');
            rmvBtn.setAttribute('id','rmvBtn');
            rmvBtn.textContent = 'Remove';

        editRmvDiv.append(editBtn, rmvBtn);

    const newTabBtn = document.createElement('div');
        newTabBtn.classList.add('tab');
        newTabBtn.setAttribute('id','newTabDiv');

        const newTabBtnIcon = document.createElement('img');
            newTabBtnIcon.setAttribute('src','assets/undraw_add_file2_gvbb.svg');
            newTabBtnIcon.setAttribute('id','newTabBtn');
            newTabBtnIcon.classList.add('iconNav');
        
        const newTabText = document.createElement('span');
            newTabText.classList.add('navText');
            newTabText.textContent = 'Add New Category';

            newTabBtn.append(newTabBtnIcon, newTabText);

        containerTabs.append(editRmvDiv, newTabBtn);

    document.body.insertBefore(containerTabs, document.body.firstChild);

    // TABS EVENT LISTENERS

        rmvBtn.addEventListener('click', () => {     
            removeTabObj(removeTab());                                         //removeTab() returns reference to the deleted Tab
        });

        newTabBtn.addEventListener('click', toggleNewTabModal);
    
    // DEFAULT TAB
    
        createTab('#93a3f7','To-do');                                          //DOM - default category tab
        memoryObj.createNewCategory('#93a3f7','To-do');                        //Memory - default category tab
}

export { createTabsContainer }