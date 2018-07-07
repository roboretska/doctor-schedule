function checkboxCheking(event) {
    let timePicker1 = document.getElementById('timepicker');
    let timePicker2 = document.getElementById('timepicker1');
    let addTimePicker = document.getElementsByClassName('icon-plus')[0].parentNode;
    let warningAlert=document.getElementsByClassName("disable-alert")[0];


    if (event.currentTarget.checked === true) {
        timePicker1.setAttribute('disabled', "true");
        timePicker2.setAttribute('disabled', "true");
        addTimePicker.setAttribute('onclick', '');
        addTimePicker.setAttribute('disabled', 'true');

        let otherTimePicker=document.getElementsByClassName("more-timepicker")[0];
        while (otherTimePicker.firstChild) {
            otherTimePicker.removeChild(otherTimePicker.firstChild);
        }
        warningAlert.style.display = "block";


    }else {
        warningAlert.style.display = "none";
        timePicker1.removeAttribute('disabled');
        timePicker2.removeAttribute('disabled');
        addTimePicker.setAttribute('onclick', 'insertTimePicker()');
        addTimePicker.removeAttribute('disabled');
    }
}

