import { createTab } from '../tabHandling/createTab'
import { memoryObj } from '../../../src/index'

function newTabModal(){

    const newTabModal = document.createElement('div');
        newTabModal.classList.add('modal', 'hideElement', 'tabModal');                          //conserving classes for styling
        newTabModal.setAttribute('id', 'newTabModal');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModal');

            const title = document.createElement('h1');
                title.classList.add('taskTitle');
                title.textContent = 'Create a new category';
            const closeBtn = document.createElement('span');
                closeBtn.classList.add('closeModal');
                closeBtn.textContent = '\u00D7';
            
            titleContainer.append(title, closeBtn);

        const labelTitle = document.createElement('label');
            labelTitle.setAttribute('for', 'inputTitleCategory');
            labelTitle.textContent = 'Category Name:';
            labelTitle.classList.add('modalLabel');

        const inputTitle = document.createElement('input');
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'inputTitleCategory');
            inputTitle.setAttribute('required', 'required');
            inputTitle.classList.add('inputTitle', 'inputTitleCategory');

        const labelColor = document.createElement('label');
            labelColor.setAttribute('for', 'inputColorCategory');
            labelColor.textContent = 'Category Color Tab:';
            labelColor.classList.add('modalLabel');

        const inputColor = document.createElement('input');
            inputColor.setAttribute('type', 'color');
            inputColor.setAttribute('name', 'inputColorCategory');
            inputColor.classList.add('inputDescript', 'inputColorCategory');
            inputColor.value = '#464658';

        const submitBtn = document.createElement('button');
            submitBtn.classList.add('submitBtn');
            submitBtn.textContent = 'Add New Category';

        newTabModal.append(titleContainer, labelTitle, inputTitle, labelColor, inputColor, submitBtn);

    const newTabModalOverlay = document.createElement('div');
        newTabModalOverlay.classList.add('modalOverlay', 'hideElement');
        newTabModalOverlay.setAttribute('id', 'newTabModalOverlay');

    //LISTENERS FOR TAB MODAL
        
        closeBtn.addEventListener('click', toggleNewTabModal);

        window.addEventListener('click', (e) => {if (e.target == newTabModalOverlay) toggleNewTabModal(); });

        submitBtn.addEventListener('click', () => {

            if (inputTitle.validity.valueMissing) {
                inputTitle.setCustomValidity('A title is required');
                inputTitle.reportValidity();
                return;
            } else {
                inputTitle.setCustomValidity('');
            }
            
            let check = 1;                                                                          //checks for duplicate names on categories
            const tabTitles = document.querySelectorAll('.navText');                                    
            tabTitles.forEach((tabTitle) => { if (inputTitle.value == tabTitle.textContent) {
                check = check - 2;
            }
            });

            if (check < 0) {
                inputTitle.setCustomValidity("Can't create categories with the same title");
                inputTitle.reportValidity();
                return;
            } else {
                inputTitle.setCustomValidity('');
            }


            createTab(inputColor.value, inputTitle.value);                                      //creates in the DOM
            memoryObj.createNewCategory(inputColor.value, inputTitle.value);                    //creates in the memory

            inputTitle.value = '';

            toggleNewTabModal();

        });

    document.body.insertBefore(newTabModal, document.body.lastChild);
    document.body.insertBefore(newTabModalOverlay, document.body.lastChild);
}


function toggleNewTabModal(e){    

    const tabModal = document.querySelector('#newTabModal');
    const tabModalOverlay = document.querySelector('#newTabModalOverlay');
           
        tabModal.classList.toggle('hideElement');
        tabModalOverlay.classList.toggle('hideElement');
     
}

export { newTabModal, toggleNewTabModal }