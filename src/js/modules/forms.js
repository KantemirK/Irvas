import postData from "../services/services";
import {closeAllModal} from "./modals";
import checkNumInput from "./checkNumInput";
import checkNameInput from "./checkNameInput";

const forms = (formSelector, headerSelector, phoneInputsAttribute, nameInputsAttribute, modalState) => { 
    const forms = document.querySelectorAll(formSelector);
    
    checkNumInput(phoneInputsAttribute);
    checkNameInput(nameInputsAttribute);

    const message = {
        loading: 'assets/img/form/spinner/ball-triangle.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const bindPostData = form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = (tag, message) => {        
                const element = document.createElement(tag);
     
                if (/\//.test(message)) { //test - возвращает bool значение
                    element.src = message;
                    element.style.cssText = `
                        display: block;
                        margin: 20px auto 30px auto;
                    `; 
                    form.firstElementChild.classList.add('hide');
                    form.firstElementChild.classList.remove('show');
                } else {
                    element.textContent = message;
                }
                
                form.insertAdjacentElement('afterbegin', element);
            };

            statusMessage('img', message.loading);

            const dynamicStatusMessage = (tagStatusMessage, message) => {
                form.firstElementChild.remove();
                statusMessage(tagStatusMessage, message);
                setTimeout(() => {
                    closeAllModal(headerSelector);

                    form.firstElementChild.remove();
                    form.firstElementChild.classList.remove('hide');
                    form.firstElementChild.classList.add('show');
                }, 5000);
            };

            const formData = new FormData(form);

            if (form.getAttribute("data-calc") === "end") { //если у формы есть атрибут ..., то добавим ещё данных
                for (let key in modalState) {
                    formData.append(key, modalState[key]);
                }
            }
            //const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('assets/server.php', formData)
            .then(data => {
                console.log(data);
                dynamicStatusMessage('h2', message.success);
            })
            .catch(() => dynamicStatusMessage('h2', message.failure))
            .finally(() => form.reset());
        });    
    };

    forms.forEach(item => bindPostData(item));
};

export default forms;


