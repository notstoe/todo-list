function categoriesHandling() {

    let categoriesObj = {};

    const createNewCategory = (catgryTitle, color) => {                 //on the arr, [0] is the catgry color
        
        if (categoriesObj.hasOwnProperty(catgryTitle)) {                // can't create categories with the same name
            alert ("Can't create categories with the same name!");
            return;
        };
        categoriesObj[catgryTitle] = [];
        categoriesObj[catgryTitle].push(color); 
    };

    const pushNewTask = (catgryTitle, taskObj) => {

        categoriesObj[catgryTitle].push(taskObj);
    };

    const renameCategory = (oldName, newName) => {
        categoriesObj[newName] = categoriesObj[oldName];
        delete categoriesObj[oldName];
    };

    const changeColor = (catgryTitle, newColor) => {
        categoriesObj[catgryTitle][0] = newColor;
    };

    const getAllTodos = () => console.log(categoriesObj);

    return { createNewCategory, getAllTodos, pushNewTask, renameCategory, changeColor }

}

export { categoriesHandling }