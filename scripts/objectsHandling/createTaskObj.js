// TASK OBJECT FACTORY

function createTaskObj(taskDueDate, taskTitle, taskDescription) {
    
    let title = taskTitle;
    let description = taskDescription;
    let dueDate = taskDueDate;

    const getTitle = () => title;
    const getDescript = () => description;
    const getDueDate = () => dueDate;

    const setTitle = (input) => title = input;
    const setDescript = (input) => description = input;
    const setDueDate = (input) => dueDate = input;

    return {getTitle, getDescript, getDueDate, setTitle, setDescript, setDueDate}

}

export { createTaskObj }