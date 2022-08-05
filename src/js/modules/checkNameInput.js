const checkNameInput = (selector) => {
    const nameInputs = document.querySelectorAll(selector);

    nameInputs.forEach(nameInput => { 
        
        nameInput.addEventListener('input', () => {
            nameInput.value = nameInput.value.replace(/\d/, "").trim();
        });
    });
};

export default checkNameInput;
