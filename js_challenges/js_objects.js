function getTime() {
    let time = new Date();
    let clock = {
        hour: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
    }
    let relay = setTimeout(getTime, 1000);
    console.log(clock.hour + ":" + clock.minutes + ":" + clock.seconds)
}
