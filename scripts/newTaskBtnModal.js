function newTaskModal(){

    const newTaskModal = document.createElement('div');
        newTaskModal.classList.add('newTaskModal', 'hideElement');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModalNewTask');

            const title = document.createElement('h1');
                title.setAttribute('id', 'newTaskTitle');
                title.textContent = 'Create a New Task';
            const closeBtn = document.createElement('span');
                closeBtn.setAttribute('id','closeNewTask');
                closeBtn.textContent = '\u00D7';
            
            titleContainer.append(title, closeBtn);

        const labelTitle = document.createElement('label');
            labelTitle.setAttribute('for', 'inputTitle');
            labelTitle.textContent = 'Title:';
            labelTitle.classList.add('newTaskLabel');

        const inputTitle = document.createElement('input');
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'inputTitle');
            inputTitle.setAttribute('id', 'inputTitle');                

        const labelDate = document.createElement('label');
            labelDate.setAttribute('for', 'inputDate');
            labelDate.textContent = 'Due Date:';
            labelDate.classList.add('newTaskLabel');

        const inputDate = document.createElement('input');
            inputDate.setAttribute('type', 'date');
            inputDate.setAttribute('name', 'inputDate');
            inputDate.setAttribute('id', 'inputDate');
            inputDate.attributes.required = '';

        const labelDescript = document.createElement('label');
            labelDescript.setAttribute('for', 'inputDescript');
            labelDescript.textContent = 'Task Description:';
            labelDescript.classList.add('newTaskLabel');

        const inputDescript = document.createElement('textarea');
            inputDescript.setAttribute('name', 'inputDescript');
            inputDescript.setAttribute('id', 'inputDescript');

        const submitBtn = document.createElement('button');
            submitBtn.setAttribute('id', 'submitNewTask');
            submitBtn.textContent = 'Add New Task';

        newTaskModal.append(titleContainer, labelTitle, inputTitle, labelDate, inputDate, labelDescript, inputDescript, submitBtn);

    const newTaskmodalOverlay = document.createElement('div');
        newTaskmodalOverlay.classList.add('newTaskModalOverlay', 'hideElement');

    //LISTENERS FOR TASK MODAL
        
        closeBtn.addEventListener('click', () => {
            newTaskModal.classList.toggle('hideElement');
            newTaskmodalOverlay.classList.toggle('hideElement');
        });

        window.addEventListener('click', (e) => {
            if (e.target == newTaskmodalOverlay) {
                newTaskModal.classList.toggle('hideElement');
                newTaskmodalOverlay.classList.toggle('hideElement');
            }
        });

        submitBtn.addEventListener('click', () => {
            console.log(inputTitle.value, inputDate.value, inputDescript.value);

        });


    document.body.append(newTaskModal, newTaskmodalOverlay);
}


export { newTaskModal }