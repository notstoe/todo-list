function markTaskDone(e) {

    const rmvBtn = e.target.parentNode.parentNode.lastChild;
    const editBtn = e.target.parentNode.parentNode.childNodes[4];
    const taskDescript = e.target.parentNode.parentNode.parentNode.lastChild;

    e.target.parentNode.parentNode.parentNode.classList.toggle('taskDone');                     //targets task big Div

    if (taskDescript.classList.contains('hideElement')) rmvBtn.classList.toggle('hideElement');
}

export { markTaskDone }