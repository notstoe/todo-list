function toggleNewTaskModal(e){    

    const taskModal = document.querySelector('#newTaskModal');
    const taskModalOverlay = document.querySelector('#newTaskModalOverlay');
           
        taskModal.classList.toggle('hideElement');
        taskModalOverlay.classList.toggle('hideElement');
     
}

export { toggleNewTaskModal }