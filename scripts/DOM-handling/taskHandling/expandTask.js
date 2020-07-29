// shows tasks details

function expandTask(e){

    e.target.parentNode.parentNode.lastChild.classList.toggle('hideElement');           //targets task description
    e.target.parentNode.parentNode.firstChild.classList.toggle('activeTask');           //targets task Div
    e.target.parentNode.childNodes[4].classList.toggle('hideElement');                  //targets edit button
    e.target.parentNode.childNodes[5].classList.toggle('hideElement');                  //targets remove button
    
}

export { expandTask }