import { format } from 'date-fns'
import { memoryObj } from '../../../src/index'

function editTaskModal(e){

    const editModal = document.querySelector('#editTaskModal');
    const editOverlay = document.querySelector('#editTaskModalOverlay');

    if (editModal){                                                                     //removes the modal if it already exists in the DOM
        editModal.parentNode.removeChild(editModal);
        editOverlay.parentNode.removeChild(editOverlay);
    }

    const taskDate = e.target.parentNode.childNodes[1];                                 //saves the reference to the task node clicked for editing
    const taskTitle = e.target.parentNode.childNodes[3];
    const taskDescript = e.target.parentNode.parentNode.lastChild.firstChild;

    const editTaskModal = document.createElement('div');
        editTaskModal.classList.add('modal', 'hideElement');                 //using the same class to preserve the styling
        editTaskModal.setAttribute('id', 'editTaskModal');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModal');

            const title = document.createElement('h1');
                title.textContent = 'Edit current task';
                title.classList.add('taskTitle');
                
            const closeBtn = document.createElement('span');
                closeBtn.classList.add('closeModal');
                closeBtn.textContent = '\u00D7';
            
            titleContainer.append(title, closeBtn);

        const labelTitle = document.createElement('label');
            labelTitle.setAttribute('for', 'inputTitleEdit');
            labelTitle.textContent = 'Title:';
            labelTitle.classList.add('modalLabel');


        const inputTitle = document.createElement('input');
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'inputTitleEdit');
            inputTitle.setAttribute('required', 'required');
            inputTitle.classList.add('inputTitle');                

        const labelDate = document.createElement('label');
            labelDate.setAttribute('for', 'inputDateEdit');
            labelDate.textContent = 'Due Date:';
            labelDate.classList.add('modalLabel');

        const inputDate = document.createElement('input');
            inputDate.setAttribute('type', 'date');
            inputDate.setAttribute('name', 'inputDateEdit');
            inputDate.setAttribute('required', 'required');
            inputDate.classList.add('inputDate');

        const labelDescript = document.createElement('label');
            labelDescript.setAttribute('for', 'inputDescriptEdit');
            labelDescript.textContent = 'Task Description:';
            labelDescript.classList.add('modalLabel');

        const inputDescript = document.createElement('textarea');
            inputDescript.setAttribute('name', 'inputDescriptEdit');
            inputDescript.classList.add('inputDescript');

        const submitBtn = document.createElement('button');
            submitBtn.classList.add('submitBtn');
            submitBtn.textContent = 'Submit Changes';

        editTaskModal.append(titleContainer, labelTitle, inputTitle, labelDate, inputDate, labelDescript, inputDescript, submitBtn);

    const editTaskModalOverlay = document.createElement('div');
        editTaskModalOverlay.classList.add('modalOverlay', 'hideElement');
        editTaskModalOverlay.setAttribute('id', 'editTaskModalOverlay');

    //LISTENERS FOR EDIT TASK MODAL
        
        closeBtn.addEventListener('click', toggleEditTaskModal);

        window.addEventListener('click', (e) => {if (e.target == editTaskModalOverlay) toggleEditTaskModal(); });

        submitBtn.addEventListener('click', () => {

            if (inputDate.validity.valueMissing || inputTitle.validity.valueMissing) {
                if (inputDate.validity.valueMissing && inputTitle.validity.valueMissing) {
                    inputTitle.setCustomValidity('A title is required');
                    inputTitle.reportValidity();
                    inputDate.setCustomValidity('A date is required');
                    inputDate.reportValidity();

                } else if (inputTitle.validity.valueMissing) {
                    inputTitle.setCustomValidity('A title is required');
                    inputDate.setCustomValidity('');
                    inputTitle.reportValidity();

                } else if (inputDate.validity.valueMissing) {
                    inputDate.setCustomValidity('A date is required');
                    inputTitle.setCustomValidity('');
                    inputDate.reportValidity();
                }
                return;
            } else {
                inputDate.setCustomValidity('');
                inputTitle.setCustomValidity('');
            }

            let dateArr = inputDate.value.split('-');                                               //date as string: yyyy-mm-dd into [yyyy, mm, dd]
            let dateFormated = format(new Date(dateArr[0], dateArr[1]-1, dateArr[2]), 'dd-MM-yyyy');

            // EDITING IN THE DOM

                taskDate.textContent = dateFormated.split('-').join('/');                                      
                taskTitle.textContent = inputTitle.value;
                taskDescript.textContent = inputDescript.value;
            
            // EDITING IN THE OBJECT
            
                const bigTaskDiv = e.target.parentNode.parentNode;
                const arrRef = bigTaskDiv.id;                                                               //id corresponds to array index
                
                const activeTab = document.querySelector('.activeTab');
                const categoryArr = memoryObj.getCategoryArr(activeTab.lastChild.textContent);

                    categoryArr[arrRef].setDueDate(dateFormated.split('-').join('/'));
                    categoryArr[arrRef].setTitle(inputTitle.value);
                    categoryArr[arrRef].setDescript(inputDescript.value);               
            
            toggleEditTaskModal();
        });


    document.body.append(editTaskModal, editTaskModalOverlay);
}


function toggleEditTaskModal(e){    

    let oldValue;
    let newValue;

    const taskModal = document.querySelector('#editTaskModal');
    const taskModalOverlay = document.querySelector('#editTaskModalOverlay');
           
        taskModal.classList.toggle('hideElement');
        taskModalOverlay.classList.toggle('hideElement');

    if (!e) return;                                                                             //prevents an error when function is not called by an event

    if (e.target.id === 'editIcon') {

        const taskDate = e.target.parentNode.childNodes[1];
        const taskTitle = e.target.parentNode.childNodes[3];
        const taskDescript = e.target.parentNode.parentNode.lastChild.firstChild;

        const inputDateEdit = document.querySelector('input[name="inputDateEdit"]');
            oldValue = taskDate.textContent.split('/');                                             //targets due Date and gets the date in this format: [dd, mm, yyyy]
            newValue = `${oldValue[2]}-${oldValue[1]}-${oldValue[0]}`;                              //converts to yyyy-mm-dd
            
            inputDateEdit.value = newValue;

        const inputTitleEdit = document.querySelector('input[name="inputTitleEdit"]');
            inputTitleEdit.value = taskTitle.textContent;                                           //targets title of the task clicked

        const inputDescriptEdit = document.querySelector('textarea[name="inputDescriptEdit"]');
            inputDescriptEdit.value = taskDescript.textContent;                                     //targets description of the task clicked

    }

}


export { editTaskModal, toggleEditTaskModal }