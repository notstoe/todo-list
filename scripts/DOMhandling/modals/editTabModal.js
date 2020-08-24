import { memoryObj } from '../../../src/index'

function editTabModal(){

    const editTabModal = document.createElement('div');
        editTabModal.classList.add('modal', 'hideElement', 'tabModal');                          //conserving classes for styling
        editTabModal.setAttribute('id', 'editTabModal');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModal');

            const title = document.createElement('h1');
                title.classList.add('taskTitle');
                title.textContent = 'Editing Active Category';
            const closeBtn = document.createElement('span');
                closeBtn.classList.add('closeModal');
                closeBtn.textContent = '\u00D7';
            
            titleContainer.append(title, closeBtn);

        const labelTitle = document.createElement('label');
            labelTitle.setAttribute('for', 'inputEditTitleCategory');
            labelTitle.textContent = 'Category Name:';
            labelTitle.classList.add('modalLabel');

        const inputTitle = document.createElement('input');
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'inputEditTitleCategory');
            inputTitle.classList.add('inputTitle', 'inputTitleCategory');

        const labelColor = document.createElement('label');
            labelColor.setAttribute('for', 'inputEditColorCategory');
            labelColor.textContent = 'Category Color Tab:';
            labelColor.classList.add('modalLabel');

        const inputColor = document.createElement('input');
            inputColor.setAttribute('type', 'color');
            inputColor.setAttribute('name', 'inputEditColorCategory');
            inputColor.classList.add('inputDescript', 'inputColorCategory');

        const submitBtn = document.createElement('button');
            submitBtn.classList.add('submitBtn');
            submitBtn.textContent = 'Submit Changes';

        editTabModal.append(titleContainer, labelTitle, inputTitle, labelColor, inputColor, submitBtn);

    const editTabModalOverlay = document.createElement('div');
        editTabModalOverlay.classList.add('modalOverlay', 'hideElement');
        editTabModalOverlay.setAttribute('id', 'editTabModalOverlay');

    //LISTENERS FOR TAB MODAL
        
        closeBtn.addEventListener('click', toggleEditTabModal);

        window.addEventListener('click', (e) => {if (e.target == editTabModalOverlay) toggleEditTabModal(); });

        submitBtn.addEventListener('click', () => {

            const activeTab = document.querySelector('.activeTab');
            const tabTitleReference = activeTab.lastChild.textContent;

            if (inputTitle.validity.valueMissing) {
                inputTitle.setCustomValidity('A title is required');
                inputTitle.reportValidity();
                return;
            } else {
                inputTitle.setCustomValidity('');
            }
            
            let check = 1;                                                                                  //checks for duplicate names on categories
            const tabTitles = document.querySelectorAll('.navText');                                    
                tabTitles.forEach((tabTitle) => { if (inputTitle.value == tabTitle.textContent) {
                    if (!tabTitle.parentNode.classList.contains('activeTab')) check = check - 2;
                }
                });

                if (check < 0) {
                    inputTitle.setCustomValidity("Can't create categories with the same title");
                    inputTitle.reportValidity();
                    return;
                } else {
                    inputTitle.setCustomValidity('');
                }

            // EDITING TAB IN THE MEMORY OBJ

                memoryObj.changeCatColor(tabTitleReference, inputColor.value);
                memoryObj.renameCategory(tabTitleReference, inputTitle.value);                      

            // EDITING TAB IN THE DOM

                activeTab.firstChild.style.backgroundColor = inputColor.value;
                activeTab.lastChild.textContent = inputTitle.value;

            // EDITING PAGE TITLE IN THE DOM

                const tabIndicator = document.querySelector('#tabIndicator');
                    tabIndicator.style.backgroundColor = inputColor.value;

                const pageTitle = document.querySelector('#pageTitle');
                    pageTitle.textContent = inputTitle.value; 

            toggleEditTabModal();

        });

    document.body.insertBefore(editTabModal, document.body.lastChild);
    document.body.insertBefore(editTabModalOverlay, document.body.lastChild);
}


function toggleEditTabModal(bypass){    

    const editModal = document.querySelector('#editTabModal');
    const editOverlay = document.querySelector('#editTabModalOverlay');
           
        editModal.classList.toggle('hideElement');
        editOverlay.classList.toggle('hideElement');
     

    // POPULATING INPUT VALUES

        if (!bypass) return;                                                                  //stops the code here if it wasn't called by a click on the edit button

        const activeTab = document.querySelector('.activeTab');
        const tabTitle = activeTab.lastChild.textContent;

        const categoryArr = memoryObj.getCategoryArr(tabTitle);

        const inputEditTitle = document.querySelector('input[name="inputEditTitleCategory"]');
        const inputEditColor = document.querySelector('input[name="inputEditColorCategory"]');
            inputEditTitle.value = tabTitle;
            inputEditColor.value = categoryArr[0];
}

export { editTabModal, toggleEditTabModal }