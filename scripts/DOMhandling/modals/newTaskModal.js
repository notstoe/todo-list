import { createTask } from '../taskHandling/createTask'
import { format } from 'date-fns'

function newTaskModal(){

    const newTaskModal = document.createElement('div');
        newTaskModal.classList.add('modal', 'hideElement');
        newTaskModal.setAttribute('id', 'newTaskModal');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModal');

            const title = document.createElement('h1');
                title.classList.add('taskTitle');
                title.setAttribute('id', 'newTaskTitle');
                title.textContent = 'Create a New Task';
            const closeBtn = document.createElement('span');
                closeBtn.classList.add('closeModal');
                closeBtn.setAttribute('id','closeNewTask');
                closeBtn.textContent = '\u00D7';
            
            titleContainer.append(title, closeBtn);

        const labelTitle = document.createElement('label');
            labelTitle.setAttribute('for', 'inputTitle');
            labelTitle.textContent = 'Title:';
            labelTitle.classList.add('modalLabel');

        const inputTitle = document.createElement('input');
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'inputTitle');
            inputTitle.classList.add('inputTitle');
            // inputTitle.setAttribute('id', 'inputTitle');                

        const labelDate = document.createElement('label');
            labelDate.setAttribute('for', 'inputDate');
            labelDate.textContent = 'Due Date:';
            labelDate.classList.add('modalLabel');

        const inputDate = document.createElement('input');
            inputDate.setAttribute('type', 'date');
            inputDate.setAttribute('name', 'inputDate');
            inputDate.classList.add('inputDate');
            // inputDate.setAttribute('id', 'inputDate');

        const labelDescript = document.createElement('label');
            labelDescript.setAttribute('for', 'inputDescript');
            labelDescript.textContent = 'Task Description:';
            labelDescript.classList.add('modalLabel');

        const inputDescript = document.createElement('textarea');
            inputDescript.setAttribute('name', 'inputDescript');
            inputDescript.classList.add('inputDescript');
            // inputDescript.setAttribute('id', 'inputDescript');

        const submitBtn = document.createElement('button');
            // submitBtn.setAttribute('id', 'submitNewTask');
            submitBtn.classList.add('submitBtn');
            submitBtn.textContent = 'Add New Task';

        newTaskModal.append(titleContainer, labelTitle, inputTitle, labelDate, inputDate, labelDescript, inputDescript, submitBtn);

    const newTaskModalOverlay = document.createElement('div');
        newTaskModalOverlay.classList.add('modalOverlay', 'hideElement');
        newTaskModalOverlay.setAttribute('id', 'newTaskModalOverlay');

    //LISTENERS FOR TASK MODAL
        
        closeBtn.addEventListener('click', toggleNewTaskModal);

        window.addEventListener('click', (e) => {if (e.target == newTaskModalOverlay) toggleNewTaskModal(); });

        submitBtn.addEventListener('click', () => {

            if (inputDate.value === '' || inputTitle.value === '') {

                alert ('Ops, looks like you forgot to add a Title and/or a due Date');
                return;
            }

            let dateArr = inputDate.value.split('-');                                  //date as string: yyyy-mm-dd into [yyyy, mm, dd]

            let dateFormated = format(new Date(dateArr[0], dateArr[1]-1, dateArr[2]), 'dd-MM-yyyy');

            
            createTask(dateFormated.split('-').join('/'), inputTitle.value, inputDescript.value);
        
            inputDate.value = '';
            inputTitle.value = '';
            inputDescript.value = '';

            toggleNewTaskModal();

        });


    document.body.append(newTaskModal, newTaskModalOverlay);
}


function toggleNewTaskModal(e){    

    const taskModal = document.querySelector('#newTaskModal');
    const taskModalOverlay = document.querySelector('#newTaskModalOverlay');
           
        taskModal.classList.toggle('hideElement');
        taskModalOverlay.classList.toggle('hideElement');
     
}

export { newTaskModal, toggleNewTaskModal }