// shows tasks details

function expandTask(e){

    e.target.parentNode.parentNode.lastChild.classList.toggle('hideElement');
    e.target.parentNode.parentNode.firstChild.classList.toggle('activeTask');
    
}

export { expandTask }