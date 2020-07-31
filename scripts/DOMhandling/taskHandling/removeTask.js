
function removeTask (e){

    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);              //remove div(task + description) from taskContainer
}

export { removeTask }