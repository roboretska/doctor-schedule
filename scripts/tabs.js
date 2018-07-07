function showTabContext(event, shift){

    let i, tabContent, tabLinks;
    console.log(document.getElementById("defaultOpen").click());
    document.getElementById("defaultOpen").click();

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("shift-button");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(shift).style.display = "block";
    event.currentTarget.className += " active";

}