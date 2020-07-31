function newTabModal(){

    const newTabModal = document.createElement('div');
        newTabModal.classList.add('modal', 'hideElement');                          //conserving classes for styling
        newTabModal.setAttribute('id', 'newTabModal');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModal');

            const title = document.createElement('h1');
                title.classList.add('taskTitle');
                title.textContent = 'Create a New Task';
            const closeBtn = document.createElement('span');
                closeBtn.classList.add('closeModal');
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

        const labelDate = document.createElement('label');
            labelDate.setAttribute('for', 'inputDate');
            labelDate.textContent = 'Due Date:';
            labelDate.classList.add('modalLabel');

        const inputDate = document.createElement('input');
            inputDate.setAttribute('type', 'date');
            inputDate.setAttribute('name', 'inputDate');
            inputDate.classList.add('inputDate');
            inputDate.attributes.required = '';

        const labelDescript = document.createElement('label');
            labelDescript.setAttribute('for', 'inputDescript');
            labelDescript.textContent = 'Task Description:';
            labelDescript.classList.add('modalLabel');

        const inputDescript = document.createElement('textarea');
            inputDescript.setAttribute('name', 'inputDescript');
            inputDescript.classList.add('inputDescript');

        const submitBtn = document.createElement('button');
            submitBtn.classList.add('submitBtn');
            submitBtn.textContent = 'Add New Task';

        newTabModal.append(titleContainer, labelTitle, inputTitle, labelDate, inputDate, labelDescript, inputDescript, submitBtn);

    const newTabModalOverlay = document.createElement('div');
        newTabModalOverlay.classList.add('modalOverlay', 'hideElement');
        newTabModalOverlay.setAttribute('id', 'newTabModalOverlay');

    //LISTENERS FOR TAB MODAL
        
        closeBtn.addEventListener('click', toggleNewTabModal);

        window.addEventListener('click', (e) => {if (e.target == newTabModalOverlay) toggleNewTabModal(); });

        // submitBtn.addEventListener('click', () => {

        //     if (inputDate.value === '' || inputTitle.value === '') {

        //         alert ('Ops, looks like you forgot to add a Title and/or a due Date');
        //         return;
        //     }

        //     let dateArr = inputDate.value.split('-');                                  //date as string: yyyy-mm-dd into [yyyy, mm, dd]

        //     let dateFormated = format(new Date(dateArr[0], dateArr[1]-1, dateArr[2]), 'dd-MM-yyyy');

            
        //     createTask(dateFormated.split('-').join('/'), inputTitle.value, inputDescript.value);
        
        //     inputDate.value = '';
        //     inputTitle.value = '';
        //     inputDescript.value = '';

        //     toggleNewTabModal();

        // });


    document.body.append(newTabModal, newTabModalOverlay);
}


function toggleNewTabModal(e){    

    const tabModal = document.querySelector('#newTabModal');
    const tabModalOverlay = document.querySelector('#newTabModalOverlay');
           
        tabModal.classList.toggle('hideElement');
        tabModalOverlay.classList.toggle('hideElement');
     
}

export { newTabModal, toggleNewTabModal }