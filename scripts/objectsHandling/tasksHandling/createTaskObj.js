// TASK OBJECT FACTORY

function createTaskObj(taskDueDate, taskTitle, taskDescription, taskDone) {
    
    let title = taskTitle;
    let description = taskDescription;
    let dueDate = taskDueDate;
    let isDone = taskDone;
    
    if (!taskDone) isDone = false;

    const getTitle = () => title;
    const getDescript = () => description;
    const getDueDate = () => dueDate;
    const getTaskDone = () => isDone;

    const setTitle = (input) => title = input;
    const setDescript = (input) => description = input;
    const setDueDate = (input) => dueDate = input;
    const setTaskDone = (input) => isDone = input;

    return {getTitle, getDescript, getDueDate, getTaskDone, setTitle, setDescript, setDueDate, setTaskDone}

}

export { createTaskObj }