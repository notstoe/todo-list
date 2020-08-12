// LIST OF TASKS 

function createMemoryObj() {

    let categoriesObj = {};

    const createNewCategory = (color, title) => {                 //on the arr, [0] is the catgry color

        categoriesObj[title] = [];
        categoriesObj[title].push(color); 
    };

    const pushNewTask = (title, taskObj) => {

        categoriesObj[title].push(taskObj);
    };

    const removeTask = (title, arrRef) => {
        categoriesObj[title].splice(arrRef, 1);
    };

    const renameCategory = (oldName, newName) => {
        if (oldName === newName) return;
        categoriesObj[newName] = categoriesObj[oldName];
        delete categoriesObj[oldName];
    };

    const changeCatColor = (title, newColor) => {
        categoriesObj[title][0] = newColor;
    };

    const removeCategory = (title) => {
        delete categoriesObj[title];
    };

    const getCategoryArr = (title) => {
        return categoriesObj[title];
    };

    const getTitles = () => {
        
        let titlesArr = [];
        
        for (const key in categoriesObj) {
            titlesArr.push(key);
    
        }
        return titlesArr;
    };
    
    return { createNewCategory, pushNewTask, removeTask, renameCategory, removeCategory, changeCatColor, getCategoryArr, getTitles }
    
}

export { createMemoryObj }