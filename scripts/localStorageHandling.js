import { memoryObj, storageLS } from '../src/index'
import { createTab } from './DOMhandling/tabHandling/createTab';
import { createTask } from './DOMhandling/taskHandling/createTask';
import { createTaskObj } from './objectsHandling/tasksHandling/createTaskObj';

function renderDataLS(){

    if (!storageLS.getItem('dataTable')) {

        createTab('#93a3f7','To-do');                                                      //DOM - default category tab
        memoryObj.createNewCategory('#93a3f7','To-do');                                    //Memory - default category tab

    return;
    }

    let dataTable = JSON.parse((storageLS.getItem('dataTable')));                          //retrieves data as a table
    let taskObj;
    let arrPos;

    storageLS.clear();                                                                     

    for (let i = 0; i < dataTable.length; i++) {                                                                            //iterates through every line and retrieves tab title and tab color
            
        createTab(dataTable[i][1], dataTable[i][0]);                                                                        //creates tab in the DOM (color, title)
        memoryObj.createNewCategory(dataTable[i][1], dataTable[i][0]);                                                      //creates tab in the memory

        for (let j = 2; j < dataTable[i].length; j += 4) {                                                                  //iterates through all columns in the same line, retrieving tasks info
            
            // CREATING TASK IN THE MEMORY OBJ

                taskObj = createTaskObj(dataTable[i][j], dataTable[i][j+1], dataTable[i][j+2], dataTable[i][j+3]);

                    memoryObj.pushNewTask(dataTable[i][0], taskObj);                                                        //pushes to memory array, using category title as reference
                    arrPos = memoryObj.getCategoryArr(dataTable[i][0]).length-1;
            
            // CREATING TASK IN THE DOM

                createTask(dataTable[i][j], dataTable[i][j+1], dataTable[i][j+2], arrPos, dataTable[i][j+3]);               //dueDate, title, descript, position array, taskDone   
        }
            
    }

}

function saveDataLS(){
    
    let titlesArr = memoryObj.getTitles();
    let dataTable = [];                                                        //table where each line represents a different category                                     
    let tasksArr = [];                                                          //represents each line of the table like this: [title, color, dueDate, title, Descript, TaskDone, dueDate, title, Descript, TaskDone, ...]
    let tempArr;

    titlesArr.forEach((title) => { 
    
        tasksArr.push(title);

        tempArr = memoryObj.getCategoryArr(title);
        tasksArr.push(tempArr[0]);

        for (let i = 1; i < tempArr.length; i++) {
            
            tasksArr.push(tempArr[i].getDueDate(), tempArr[i].getTitle(), tempArr[i].getDescript(), tempArr[i].getTaskDone()); 
        }
        
        dataTable.push(tasksArr);
        tasksArr = [];
    });

    storageLS.setItem('dataTable', JSON.stringify(dataTable));
}


export { renderDataLS, saveDataLS }