import tabs from "./modules/tabs";
import "./slider";
import modal from "./modules/modals";
import {showModalByTime} from "./modules/modals";
import forms from "./modules/forms";

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click"); 
    showModalByTime(".popup", 5000);
    modal(".popup_engineer", ".popup_engineer_btn");
    modal(".popup", ".phone_link");
    forms("form", ".popup", "input[name='user_phone']");
    forms("form", ".popup_engineer", 'input[name="user_phone"]');
}); 

