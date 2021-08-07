const refs = {
    timer: document.getElementById('timer - 1'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('mins'),
    seconds: document.getElementById('secs'),
    startBtn: document.getElementById('startBtn'),
    stopBtn: document.getElementById('stopBtn'),
};

refs.startBtn.addEventListener('click', () => {
    timerPlugin.start();
});

refs.stopBtn.addEventListener('click', () => {
    timerPlugin.stop();
})

const timerPlugin = {
    intervalId: null,
    intervalIsActive: false,
    start() {
        if (this.intervalIsActive) {
            return;
        }

        const startTime = Date.now();
        this.intervalIsActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const timeDiff = startTime - currentTime;
            const { days, hours, mins, secs } = timeComponents(timeDiff);

            updateTimer({ days, hours, mins, secs });
        }, 1000);

    },
    stop() {
        clearInterval(this.intervalId);
        this.intervalIsActive = false;
    }
};


function timeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
};

function pad(value) {
    return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, mins, secs }) {
    refs.timer.textContent = `${days}:${hours}:${mins}:${secs}`;
}



// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });