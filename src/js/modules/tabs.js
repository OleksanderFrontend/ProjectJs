
const tabs = (headerSelector, tabsSelector, tabContentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabContent = document.querySelectorAll(tabContentSelector);
       const hideTabContent = () => {
         tabContent.forEach(item => {
           item.style.display = 'none';
         });

         tabs.forEach(item => {
           item.classList.remove(activeClass);
         });
       }

       const showTabsContent = (i = 0) => {
        tabContent[i].style.display = display;
        tabs[i].classList.add(activeClass);
       }

       header.addEventListener('click', (e) => {
         const target = e.target;
        if(target && target.classList.contains(tabsSelector.replace(/\./, "")) || 
         target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))) {
          
          tabs.forEach((item, i) => {
             if(target == item || target.parentNode == item) {
               hideTabContent();
               showTabsContent(i);
             } 
          });
        }

        // if(target && target.closest(tabsSelector)) {
        //      tabs.forEach((item, i) => {
        //        if (target == item || target.parentNode == item) {
        //          hideTabContent();
        //          showTabsContent(i);
        //        }
        //  });
        // }
        
       });


       hideTabContent();
       showTabsContent();
}

export default tabs;