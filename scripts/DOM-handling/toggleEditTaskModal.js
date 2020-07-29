function toggleEditTaskModal(e){    

    let oldValue;
    let newValue;

    const taskModal = document.querySelector('#editTaskModal');
    const taskModalOverlay = document.querySelector('#editTaskModalOverlay');
           
        taskModal.classList.toggle('hideElement');
        taskModalOverlay.classList.toggle('hideElement');

    if (!e) return;                                                                           //prevents an error when function is not called by an event

    if (e.target.id === 'editIcon') {

        const taskDate = e.target.parentNode.childNodes[1];
        const taskTitle = e.target.parentNode.childNodes[3];
        const taskDescript = e.target.parentNode.parentNode.lastChild.firstChild;

        const inputDateEdit = document.querySelector('input[name="inputDateEdit"]');
            oldValue = taskDate.textContent.split('/');              //targets due Date and gets the date in this format: [dd, mm, yyyy]
            newValue = `${oldValue[2]}-${oldValue[1]}-${oldValue[0]}`;                        //converts to yyyy-mm-dd
            
            inputDateEdit.value = newValue;

        const inputTitleEdit = document.querySelector('input[name="inputTitleEdit"]');
            inputTitleEdit.value = taskTitle.textContent;                                    //targets title of the task clicked

        const inputDescriptEdit = document.querySelector('textarea[name="inputDescriptEdit"]');
            inputDescriptEdit.value = taskDescript.textContent;                //targets description of the task clicked

    }
}

export { toggleEditTaskModal }