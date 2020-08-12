import { memoryObj, storageLS } from '../src/index'

function getDataLS(){
    // let test = storageLS.getItem('memoryObj');
    // console.log(JSON.parse(test));

}

function saveDataLS(){
    
    let titlesArr = memoryObj.getTitles();
    let tasksTable = [];                                                        //table where each line represents a different category                                     
    let tasksArr = [];                                                          //represents each line of the table like this: [title, color, dueDate, title, Descript, TaskDone, dueDate, title, Descript, TaskDone, ...]
    let tempArr;

    titlesArr.forEach((title) => { 
    
        tasksArr.push(title);

        tempArr = memoryObj.getCategoryArr(title);
        tasksArr.push(tempArr[0]);

        for (let i = 1; i < tempArr.length; i++) {
            
            tasksArr.push(tempArr[i].getDueDate(), tempArr[i].getTitle(), tempArr[i].getDescript(), tempArr[i].getTaskDone()); 
        }
        
        tasksTable.push(tasksArr);
        tasksArr = [];
    });

    console.log(JSON.stringify(tasksTable));                        //TODO - save this table on LS stringfied
    console.log(JSON.parse(JSON.stringify(tasksTable)));            //TODO - retrieve it with parse like this and render all page with the info (look into modals submit buttons and use same logic)

    // storageLS.setItem('memoryObj', (memoryObj));
    // console.log(JSON.stringify(memoryObj));
}


export { getDataLS, saveDataLS }