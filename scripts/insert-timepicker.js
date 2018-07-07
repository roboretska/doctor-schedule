function insertTimePicker() {

    let timepickerContainer = document.createElement('div', {});
    timepickerContainer.setAttribute("class", "input-group bootstrap-timepicker timepicker");


    let timepickerWrapper = document.createElement('div', {});
    timepickerWrapper.setAttribute("class", "input-group bootstrap-timepicker timepicker");

    let labelOne =  document.createElement('label');
    labelOne.setAttribute("for", "timepickerNew1");

    let newTimepicker1 = document.createElement('input');
    newTimepicker1.setAttribute("id", "timepickerNew1");
    newTimepicker1.setAttribute("class", "form-control input-small");
    newTimepicker1.setAttribute("data-provide", "timepicker");


    let labelTwo =  document.createElement('label');
    labelTwo.setAttribute("for", "timepickerNew2");

    let newTimepicker2 = document.createElement('input');
    newTimepicker2.setAttribute("id", "timepickerNew2");
    newTimepicker2.setAttribute("class", "form-control input-small");
    newTimepicker2.setAttribute("data-provide", "timepicker");

    let cancelButton = document.createElement('button');
    cancelButton.setAttribute("class", "icon-cancel");
    cancelButton.onclick = function (event) {
        this.parentElement.parentElement.removeChild(this.parentElement);
    };

    parentWrapper = document.getElementsByClassName("more-timepicker");
    let timeWrapper=parentWrapper[0].appendChild(timepickerContainer);

    timeWrapper.appendChild(labelOne);
    timeWrapper.appendChild(newTimepicker1);
    timeWrapper.appendChild(labelTwo);
    timeWrapper.appendChild(newTimepicker2);
    timeWrapper.appendChild(cancelButton);
    labelOne.innerHTML ="From";
    labelTwo.innerHTML = "to";



}


