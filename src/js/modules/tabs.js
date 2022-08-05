const tabs = (parentSelector, tabsSelector, tabContentsSelector, activeClass, display = "block") => {
    const parent = document.querySelector(parentSelector),
          tabs = parent.querySelectorAll(tabsSelector),
          tabContents = document.querySelectorAll(tabContentsSelector);

    const showTabContent = (i = 0) => {
        tabContents[i].style.display = display;

        tabs[i].classList.add(activeClass);
    };
    
    const hideTabContent = () => {
        tabContents.forEach(tabContent => tabContent.style.display = "none");

        tabs.forEach(tab => tab.classList.remove(activeClass));
    };

    hideTabContent();
    showTabContent();
    
    parent.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target && e.target.closest(tabsSelector)) {
            tabs.forEach((tab, i) => {
                if (e.target == tab || e.target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        } 
    });
};

export default tabs;