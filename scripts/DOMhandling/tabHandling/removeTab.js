import { renderTab } from '../renderTab'

function removeTab() {

    const tabs = document.querySelectorAll('.tab');
    
    let breakForEachLoop = false;
    let deletedTabRef;

    tabs.forEach((tab) => {

        if (!breakForEachLoop) {
            if (tab.classList.contains('activeTab')) {

                if (tab.parentNode.children.length == 3) {                                      //stops the user from deleting all categories/tabs
                    alert("Oops, you can't remove all categories.");

                } else {
                      
                    if (tab.previousSibling.id === 'editRmvDiv') {                                  //if its the first tab being deleted, render the next tab
                        
                        tab.nextSibling.classList.add('activeTab');
                        renderTab(0, tab.nextSibling);

                    } else {

                        tab.previousSibling.classList.add('activeTab');
                        renderTab(0, tab.previousSibling);
                    }
                    deletedTabRef = tab;
                    tab.parentNode.removeChild(tab);
                }

                breakForEachLoop = true;
            }
        }
    });
    
    return deletedTabRef;
}

export { removeTab }