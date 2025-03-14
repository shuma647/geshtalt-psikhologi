document.addEventListener("DOMContentLoaded", function () {
    let psychologists = document.querySelectorAll(".catalog > div");
    let showMoreBtn = document.getElementById("show-more");
    let visibleCount = 6;

    psychologists.forEach((el, index) => {
        if (index >= visibleCount) el.style.display = "none";
    });

    showMoreBtn.addEventListener("click", function () {
        let hiddenPsychologists = Array.from(psychologists).filter(el => el.style.display === "none");

        for (let i = 0; i < 6; i++) {
            if (hiddenPsychologists[i]) {
                hiddenPsychologists[i].style.display = "flex";
            }
        }

        if (Array.from(psychologists).every(el => el.style.display === "flex")) {
            showMoreBtn.style.display = "none";
        }
    });
});
    
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
       
        tabcontentParent = document.getElementById(tabName).parentNode.getElementsByClassName("tab-content");

        for (i = 0; i < tabcontentParent.length; i++) {
            tabcontentParent[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        
        tablinks = evt.currentTarget.parentElement.children;
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.color = "#2d3537";
            tablinks[i].style.borderBottom = "2px solid #ddd";
        }
        evt.currentTarget.style.color = "#49a0ee";
        evt.currentTarget.style.borderBottom = "2px solid #49a0ee";
    }

    document.addEventListener("DOMContentLoaded", function () {
        var accHeaders = document.querySelectorAll(".accordion-item-header");
    
        accHeaders.forEach(function (header) {
            header.addEventListener("click", function () {
                var content = this.nextElementSibling;
    
                document.querySelectorAll(".accordion-item-content").forEach(function (item) {
                    if (item !== content) {
                        item.style.display = "none";
                    }
                });
    
                content.style.display = (content.style.display === "block") ? "none" : "block";
            });
        });
    });

    document.querySelectorAll(".defaultTab").forEach(function (item) {
        item.click();
    });

    function toggleAboutText(button) {
        let aboutText = button.previousElementSibling;
    
        if (aboutText.style.maxHeight) {
            aboutText.style.maxHeight = null;
            button.textContent = "Показать ещё";
        } else {
            aboutText.style.maxHeight = aboutText.scrollHeight + "px";
            button.textContent = "Скрыть";
        }
    }

    function toggleItems(button) {
        let list = button.previousElementSibling;
        let hiddenItems = list.querySelectorAll(".hidden-items");
    
        if (hiddenItems[0].style.display === "list-item") {
            hiddenItems.forEach(item => item.style.display = "none");
            button.textContent = "Показать ещё";
        } else {
            hiddenItems.forEach(item => item.style.display = "list-item");
            button.textContent = "Скрыть";
        }
    }