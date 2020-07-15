// creates new tab on the DOM

function createTab(color, text){

    const navElement = document.createElement('div');
        navElement.classList.add('tab');

        const tabIcon = document.createElement('a');
            tabIcon.style.backgroundColor = color;
            tabIcon.classList.add('iconNav');
        
        const tabText = document.createElement('span');
            tabText.classList.add('navText');
            tabText.textContent = text;

        navElement.append(tabIcon, tabText);


    const referenceNavBar = document.querySelector('.containerTabs');
        referenceNavBar.insertBefore(navElement, referenceNavBar.lastChild);


    const setColor = (newColor) => tabIcon.style.backgroundColor = newColor; 

    const changeText = (newText) => tabText.textContent = newText;

    return { setColor, changeText }
}

export { createTab }