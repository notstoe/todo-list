function removeTab() {

    const containerTabs = document.querySelector('.containerTabs');

    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach((tab) => {

        if (tab.classList.contains('activeTab'))  containerTabs.removeChild(tab);

    });
}

export { removeTab }