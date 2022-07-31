import postData from "../services/services";
import {closeModal} from "./modals";

const forms = (formSelector, headerSelector, phoneInputsAttribute) => { 
    const forms = document.querySelectorAll(formSelector),
          phoneInputs = document.querySelectorAll(phoneInputsAttribute);

    phoneInputs.forEach(phoneInput => { //ввод только цифр в форму номера телефона
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/\D/, "");
        });
    });
          
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
                    closeModal(headerSelector);

                    form.firstElementChild.remove();
                    form.firstElementChild.classList.remove('hide');
                    form.firstElementChild.classList.add('show');
                }, 5000);
            };

            const formData = new FormData(form);
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


