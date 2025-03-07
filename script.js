    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        
        tablinks = evt.currentTarget.parentElement.children;
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.color = "#666";
            tablinks[i].style.borderBottom = "2px solid #ddd";
        }
        evt.currentTarget.style.color = "#49a0ee";
        evt.currentTarget.style.borderBottom = "2px solid #49a0ee";
    }

    document.getElementById("defaultTab").click();
