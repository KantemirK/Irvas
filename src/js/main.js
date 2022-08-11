import tabs from "./modules/tabs";
import "./slider";
import modal from "./modules/modals";
import {showModalByTime} from "./modules/modals";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";

const modalState = {};

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    changeModalState(modalState);
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click"); 
    tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline");
    showModalByTime(".popup", 5000);
    modal(".popup_engineer", ".popup_engineer_btn", "[data-modal]");
    modal(".popup", ".phone_link", "[data-modal]");
    modal(".popup_calc", ".glazing_price_btn", "[data-modal]", false);
    modal(".popup_calc_profile", ".popup_calc_button", "[data-modal]", false);
    modal(".popup_calc_end", ".popup_calc_profile_button", "[data-modal]", false);
    forms("form", "[data-modal]", "input[name='user_phone']", "input[name='user_name']", modalState);
    timer("#timer", "2022-08-11T10:15:00");
}); 

