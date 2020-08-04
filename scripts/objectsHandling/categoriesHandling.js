function categoriesHandling() {

    let categoriesObj = {};

    const createNewCategory = (title, color) => {                 //on the arr, [0] is the catgry color
        
        if (categoriesObj.hasOwnProperty(title)) {                // can't create categories with the same name
            alert ("Ops, can't create categories with the same name");
            return;
        };

        categoriesObj[title] = [];
        categoriesObj[title].push(color); 
    };

    const pushNewTask = (title, taskObj) => {

        categoriesObj[title].push(taskObj);
    };

    const renameCategory = (oldName, newName) => {
        categoriesObj[newName] = categoriesObj[oldName];
        delete categoriesObj[oldName];
    };

    const changeColor = (title, newColor) => {
        categoriesObj[title][0] = newColor;
    };

    const removeCategory = (title) => {
        delete categoriesObj[title];
    };

    const getAllTodos = () => console.log(categoriesObj);

    return { createNewCategory, getAllTodos, pushNewTask, renameCategory, removeCategory ,changeColor }

}

export { categoriesHandling }