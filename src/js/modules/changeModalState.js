import checkNumInput from "./checkNumInput";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
          windowWidth = document.querySelectorAll("#width"),
          windowHeight = document.querySelectorAll("#height"),
          windowType = document.querySelectorAll("#view_type"),
          windowProfile = document.querySelectorAll(".checkbox");

    checkNumInput("#width");
    checkNumInput("#height");

    const saveChangeModalState = (event, elements, prop) => {
        elements.forEach((element, i) => {
            element.addEventListener(event, () =>{
                switch (element.nodeName) {
                    case 'SPAN': 
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (element.getAttribute("type") == "checkbox") {
                            (i === 0) ? state[prop] = "cold" : state[prop] = "hot";
                            elements.forEach((item, j) => {
                                item.checked = false;
                                if (i === j) {
                                    item.checked = true;
                                }
                            });
                        } else {
                            state[prop] = element.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = element.value;
                        break;
                }
                console.log(state);
            });
        });
    };

    saveChangeModalState('click', windowForm, 'form');
    saveChangeModalState('input', windowWidth, 'width');
    saveChangeModalState('input', windowHeight, 'height');
    saveChangeModalState('change', windowType, 'type');
    saveChangeModalState('change', windowProfile, 'profile');
};

export default changeModalState;