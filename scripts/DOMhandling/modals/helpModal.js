function helpModal(){

    const helpModal = document.createElement('div');
        helpModal.classList.add('modal', 'hideElement');
        helpModal.setAttribute('id', 'helpModal');

        const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleModal');

            const title = document.createElement('h1');
                title.classList.add('titleModal');
                title.setAttribute('id', 'helpModalTitle');
                title.textContent = 'Welcome to your own personal To-do List!';
            
            titleContainer.append(title);

        const helpContentDiv = document.createElement('div');
            helpContentDiv.classList.add('helpDiv');
            const helpContent = document.createElement('p');
                helpContent.textContent = "A To-Do list consists of a list of errands or tasks one intends to accomplish.";
                helpContent.classList.add('helpContent');

            const helpContent2 = document.createElement('p');
                helpContent2.classList.add('helpContent');
                helpContent2.textContent = 'You can add different categories on the Navigation Bar to the left. You can always edit or remove categories as you wish. Remember, the \"Edit\" and \"Remove\" buttons will always work for the current active category. Which is indicated by the Color and the Page Title.';

            const helpContent3 = document.createElement('p');
                helpContent3.classList.add('helpContent');
                helpContent3.textContent = 'To add new tasks, simply click on the \"+ Add New Task\" button and the task will be added to the current active category. To expand a task and show more options, click on it\'s title.';

                const helpContent4 = document.createElement('p');
                helpContent4.classList.add('helpContent');
                helpContent4.textContent = 'That\'s pretty much it. Let\'s get some tasks done!';

            helpContentDiv.append(helpContent, helpContent2, helpContent3, helpContent4);

        const creditsDiv = document.createElement('div');
            creditsDiv.classList.add('creditsDiv');
            
            const credits = document.createTextNode('This webpage was built by ');
            const creditsLink = document.createElement('a');
                creditsLink.setAttribute('href', 'https://github.com/notstoe/todo-list');
                creditsLink.setAttribute('id', 'github');
                creditsLink.textContent = '@notstoe.';

            creditsDiv.append(credits, creditsLink);

        const okBtn = document.createElement('button');
            okBtn.classList.add('submitBtn');
            okBtn.textContent = 'Got it!';

        helpModal.append(titleContainer, helpContentDiv, creditsDiv, okBtn);

    const helpModalOverlay = document.createElement('div');
        helpModalOverlay.classList.add('modalOverlay', 'hideElement');
        helpModalOverlay.setAttribute('id', 'helpModalOverlay');

    //LISTENERS FOR TASK MODAL
        
        window.addEventListener('click', (e) => {if (e.target == helpModalOverlay) togglehelpModal(); });

        okBtn.addEventListener('click', togglehelpModal);

    document.body.insertBefore(helpModal, document.body.lastChild);
    document.body.insertBefore(helpModalOverlay, document.body.lastChild);
}


function togglehelpModal(e){    

    const helpModal = document.querySelector('#helpModal');
    const helpModalOverlay = document.querySelector('#helpModalOverlay');
           
        helpModal.classList.toggle('hideElement');
        helpModalOverlay.classList.toggle('hideElement');
     
}

export { helpModal, togglehelpModal }