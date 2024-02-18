import React from "react";

export class CurrentTime extends React.Component{
    render() {
        const {hour, min, sec, am_pm} = showTime()
        let currentTime = ` ${hour} :  ${min}  :  ${sec}  ${am_pm}`;

        if (am_pm === 'PM' && hour >= 4) {
            return (

                <div>
                    <p>It is evening</p>
                    {currentTime}
                </div>
            );
        } else {
            return (

                <div>
                    <p>It is morning</p>
                    {currentTime}
                </div>
            );
        }

    }
}

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


    return {hour,min,sec,am_pm};
}


