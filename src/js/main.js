import "./slider";
import modal from "./modules/modals";
import {showModalByTime} from "./modules/modals";

document.addEventListener('DOMContentLoaded', () => {
    showModalByTime(".popup", 5000);
    modal(".popup_engineer", ".popup_engineer_btn");
    modal(".popup", ".phone_link");
}); 

