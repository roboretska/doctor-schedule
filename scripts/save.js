function saveButton() {

    let failureAlert = document.getElementsByClassName("failure-alert")[0];
    let successAlert = document.getElementsByClassName("success-alert")[0];

    failureAlert.style.display = "none";
    successAlert.style.display = "none";


    let dayOffCheckbox = document.getElementById("free-day");

    let timePicker = [];
    timePicker[0] = document.getElementById("timepicker").value;
    timePicker[1] = document.getElementById("timepicker1").value;

    let weekday = document.getElementsByName("weekday");

    if (dayOffCheckbox.checked === true) {
        successAlert.style.display = "block";
        alertAnimation(successAlert);
        return;
    }

    var flag=false;
    for (let i = 0; i < weekday.length; i++) {
        if (weekday[i].checked) {
            flag=true;
            break;
        }

    }
    if(flag===false) {
        failureAlert.style.display = "block";
        alertAnimation(failureAlert);
        return;
    }


    if (!timePicker[0] && !timePicker[1]) {
        failureAlert.style.display = "block";
        alertAnimation(failureAlert);
        return;
    }
    for (let i = 0; timePicker[i]; i++) {
        const daytimeHours = 8;
        let hours = timePicker[i].split(':')[0];
        let minutes = timePicker[i].split(':')[1].split(' ')[0];
        let daytime = timePicker[i].split(' ')[1];
        console.log("Hours: " + hours + ", min: " + minutes + ", daytime: " + daytime);
        if (daytime === "AM" && hours < 8) {
            failureAlert.style.display = "block";
            alertAnimation(failureAlert);
            return;
        }
        if (daytime === "PM" && hours > 8) {
            failureAlert.style.display = "block";
            alertAnimation(failureAlert);
            return;

        }

    }
    successAlert.style.display = "block";
    alertAnimation(successAlert);
}

function alertAnimation(alert) {
    // setTimeout(() => {
    //     alert.style.opacity = "0.9";
    // }, 3000);
    // setTimeout(() => {
    //     alert.style.opacity = "0.7";
    // }, 3010);
    // setTimeout(() => {
    //     alert.style.opacity = "0.5";
    // }, 3020);
    // setTimeout(() => {
    //     alert.style.opacity = "0.3";
    // }, 3030);
    // setTimeout(() => {
    //     alert.style.opacity = "0.1";
    // }, 3040);
    // setTimeout(() => {
    //     alert.style.opacity = "0";
    // }, 3050);
    setTimeout(() => {
        alert.style.display = "none";
    }, 3000)

}