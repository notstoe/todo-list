// LIST OF TASKS 

function categoriesHandling() {

    let categoriesObj = {};

    const createNewCategory = (color, title) => {                 //on the arr, [0] is the catgry color

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

    const getAll = () => console.log(categoriesObj);                    //for debugging

    return { createNewCategory, pushNewTask, renameCategory, removeCategory, changeColor, getAll }

}

export { categoriesHandling }