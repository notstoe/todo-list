function markTaskDone(e) {

    e.target.parentNode.parentNode.parentNode.classList.toggle('taskDone');
}

export { markTaskDone }