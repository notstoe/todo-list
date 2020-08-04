// TASK OBJECT FACTORY

function createTaskObj(taskTitle, taskDescription, taskDueDate, taskCategory) {
    
    let title = taskTitle;
    let description = taskDescription;
    let dueDate = taskDueDate;
    let category = taskCategory;

    const getTitle = () => title;
    const getDescript = () => description;
    const getDueDate = () => dueDate;
    const getCategory = () => category;

    const setTitle = (input) => title = input;
    const setDescript = (input) => description = input;
    const setDueDate = (input) => dueDate = input;
    const setCategory = (input) => category = input;

    return {getTitle, getDescript, getDueDate, getCategory, setTitle, setDescript, setDueDate, setCategory}

}

export { createTaskObj }