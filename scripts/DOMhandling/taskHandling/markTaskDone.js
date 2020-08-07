function markTaskDone(e, taskRef) {                                     //can be called with a taskReference as well

    if (taskRef) {
        
        const taskDescriptRef = taskRef.lastChild;
        const rmvBtnRef = taskRef.firstChild.lastChild;
        const inputCheckBoxRef = taskRef.firstChild.firstChild.firstChild;

        inputCheckBoxRef.checked = true;
        
        taskRef.classList.toggle('taskDone');

        if (taskDescriptRef.classList.contains('hideElement')) rmvBtnRef.classList.toggle('hideElement');

        return;                                                                                                                 //STOPS here if it was called with a task Reference
    }

    const rmvBtn = e.target.parentNode.parentNode.lastChild;
    const taskDescript = e.target.parentNode.parentNode.parentNode.lastChild;

    e.target.parentNode.parentNode.parentNode.classList.toggle('taskDone');                     //targets task big Div

    if (taskDescript.classList.contains('hideElement')) rmvBtn.classList.toggle('hideElement');
}

export { markTaskDone }