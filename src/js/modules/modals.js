import checkAllModalData from "./checkAllModalData";

const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector),
    scroll = calcScroll();

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = 'hidden'; 
    document.body.style.marginRight = `${scroll}px`;
};

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show"); 
    document.body.style.overflow = ''; 
    document.body.style.marginRight = `0px`;
};

const closeAllModal = (modalSelector) => {
    const windows = document.querySelectorAll(modalSelector);
        
    windows.forEach(window => {
        window.classList.add("hide");
        window.classList.remove("show");
        document.body.style.overflow = ''; 
        document.body.style.marginRight = `0px`;
    });
};

const calcScroll = () => {
    const div = document.createElement('div');

    div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;

    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

let timerId = 0;

const showModalByTime = (modalSelector, time) => {
    timerId = setTimeout(() => openModal(modalSelector), time);
    return timerId;
};

const modal = (modalSelector, triggerSelector, modalHeader, closeClickOverlay = true) => {
    const modal = document.querySelector(modalSelector),
          triggers = document.querySelectorAll(triggerSelector);

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