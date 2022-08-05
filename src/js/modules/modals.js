import checkAllModalData from "./checkAllModalData";

const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = 'hidden'; 
};

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show"); 
    document.body.style.overflow = ''; 
};

const closeAllModal = (modalSelector) => {
    const windows = document.querySelectorAll(modalSelector);
        
    windows.forEach(window => {
        window.classList.add("hide");
        window.classList.remove("show");
        document.body.style.overflow = ''; 
    });
};

let timerId = 0;

const showModalByTime = (modalSelector, time) => {
    timerId = setTimeout(() => openModal(modalSelector), time);
    return timerId;
};

const modal = (modalSelector, triggerSelector, modalHeader, closeClickOverlay = true) => {
    const modal = document.querySelector(modalSelector);
    const triggers = document.querySelectorAll(triggerSelector);

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();

            if (checkAllModalData(e.target)) { 
                closeAllModal(modalHeader);
                openModal(modalSelector);
                clearInterval(timerId);
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if ((e.target === modal && closeClickOverlay) || e.target.getAttribute('cross') == '') {
            closeModal(modalSelector);
        }
    });
};

export default modal;
export {closeAllModal, showModalByTime};