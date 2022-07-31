import postData from "../services/services";

const forms = (formSelector, phoneInputsAttribute) => {
    const forms = document.querySelectorAll(formSelector),
          phoneInputs = document.querySelectorAll(phoneInputsAttribute);
    
    phoneInputs.forEach(phoneInput => {
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
                } else {
                    element.textContent = message;
                }
                element.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
                
                form.insertAdjacentElement('afterbegin', element);
            };

            statusMessage('img', message.loading);

            const formData = new FormData(form);
            //const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('assets/server.php', formData)
            .then(data => {
                console.log(data);
                form.firstChild.remove();
                statusMessage('div', message.success);
                setTimeout(() => form.firstChild.remove(), 3000);
            })
            .catch(() => {
                form.firstChild.remove();
                statusMessage('div', message.failure);
                setTimeout(() => form.firstChild.remove(), 3000);
            })
            .finally(() => form.reset());
        });    
    };

    forms.forEach(item => bindPostData(item));
};

export default forms;


