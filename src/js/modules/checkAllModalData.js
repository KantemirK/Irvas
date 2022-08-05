const checkAllModalData = (btn) => {
    const windowWidth = document.querySelector("#width"),
          windowHeight = document.querySelector("#height"),
          windowProfile = document.querySelectorAll(".checkbox");

    const modalOne = btn.classList.contains('popup_calc_button'),
          modalTwo = btn.classList.contains('popup_calc_profile_button');
    
    let bool = true;

    if (windowWidth.value != "" && windowHeight.value != "" && modalOne) {
        bool = true;
        windowWidth.value = '';
        windowHeight.value = '';
    } else {
        for (let item of windowProfile) {
            if (item.checked && modalTwo) {
                bool = true;
                item.checked = false;
                break;
            } else if (!modalOne && !modalTwo) {
                bool = true;
            } else {
                bool = false;
            }
        }
    }

    return bool;
};

export default checkAllModalData;