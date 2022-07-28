const tabs = (parentSelector, tabsSelector, tabContentsSelector, activeClass) => {
    const parent = document.querySelector(parentSelector),
          tabs = parent.querySelectorAll(tabsSelector),
          tabContents = document.querySelectorAll(tabContentsSelector);

    const showTabContent = (i = 0) => {
        tabContents[i].classList.add("show");
        tabContents[i].classList.remove("hide");

        tabs[i].classList.add(activeClass);
    };
    
    const hideTabContent = () => {
        tabContents.forEach(tabContent => {
            tabContent.classList.add("hide");
            tabContent.classList.remove("show");
        });

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