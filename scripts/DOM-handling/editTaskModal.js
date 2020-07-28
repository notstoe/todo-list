import { format } from 'date-fns'
import { toggleEditTaskModal } from './toggleEditTaskModal';

function editTaskModal(){

    const editTaskModal = document.createElement('div');
        editTaskModal.classList.add('newTaskModal', 'hideElement');                 //using the same class to preserve the styling
        editTaskModal.setAttribute('id', 'editTaskModal');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModalNewTask');

            const title = document.createElement('h1');
                title.setAttribute('id', 'newTaskTitle');
                title.textContent = 'Edit current task';
            const closeBtn = document.createElement('span');
                closeBtn.setAttribute('id','closeNewTask');
                closeBtn.textContent = '\u00D7';
            
            titleContainer.append(title, closeBtn);

        const labelTitle = document.createElement('label');
            labelTitle.setAttribute('for', 'inputTitleEdit');
            labelTitle.textContent = 'Title:';
            labelTitle.classList.add('newTaskLabel');


        const inputTitle = document.createElement('input');
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'inputTitleEdit');
            inputTitle.setAttribute('id', 'inputTitle');                

        const labelDate = document.createElement('label');
            labelDate.setAttribute('for', 'inputDateEdit');
            labelDate.textContent = 'Due Date:';
            labelDate.classList.add('newTaskLabel');

        const inputDate = document.createElement('input');
            inputDate.setAttribute('type', 'date');
            inputDate.setAttribute('name', 'inputDateEdit');
            inputDate.setAttribute('id', 'inputDate');

        const labelDescript = document.createElement('label');
            labelDescript.setAttribute('for', 'inputDescriptEdit');
            labelDescript.textContent = 'Task Description:';
            labelDescript.classList.add('newTaskLabel');

        const inputDescript = document.createElement('textarea');
            inputDescript.setAttribute('name', 'inputDescriptEdit');
            inputDescript.setAttribute('id', 'inputDescript');

        const submitBtn = document.createElement('button');
            submitBtn.setAttribute('id', 'submitNewTask');
            submitBtn.textContent = 'Submit Changes';

        editTaskModal.append(titleContainer, labelTitle, inputTitle, labelDate, inputDate, labelDescript, inputDescript, submitBtn);

    const editTaskModalOverlay = document.createElement('div');
        editTaskModalOverlay.classList.add('newTaskModalOverlay', 'hideElement');
        editTaskModalOverlay.setAttribute('id', 'editTaskModalOverlay');

    //LISTENERS FOR TASK MODAL
        
        closeBtn.addEventListener('click', toggleEditTaskModal);

        window.addEventListener('click', (e) => {if (e.target == editTaskModalOverlay) toggleEditTaskModal(); });

        // submitBtn.addEventListener('click', () => {

        //     if (inputDate.value === '' || inputTitle.value === '') {

        //         alert ('Ops, looks like you forgot to add a Title and/or a due Date');
        //         return;
        //     }

        //     let dateArr = inputDate.value.split('-');                                  //date as string: yyyy-mm-dd into [yyyy, mm, dd]

        //     let dateFormated = format(new Date(dateArr[0], dateArr[1], dateArr[2]), 'dd-MM-yyyy');
            
        //     createTask(dateFormated.split('-').join('/'), inputTitle.value, inputDescript.value);
        
        //     inputDate.value = '';
        //     inputTitle.value = '';
        //     inputDescript.value = '';

        //     toggleNewTaskModal();

        // });


    document.body.append(editTaskModal, editTaskModalOverlay);
}


export { editTaskModal }