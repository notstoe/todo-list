// shows tasks details

function expandTask(e){

    const editBtn = e.target.parentNode.childNodes[4];
    const rmvBtn = e.target.parentNode.childNodes[5];
    const taskDescript = e.target.parentNode.parentNode.lastChild;
    const checkBox = e.target.parentNode.childNodes[0].firstChild;

    taskDescript.classList.toggle('hideElement');                                       
    e.target.parentNode.parentNode.firstChild.classList.toggle('activeTask');           //targets task Div
    editBtn.classList.toggle('hideElement');  

    if (!checkBox.checked) rmvBtn.classList.toggle('hideElement');
}

export { expandTask }