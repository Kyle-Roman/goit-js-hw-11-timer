const refs = {
    selector: document.getElementById('timer - 1'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    mins: document.getElementById('mins'),
    secs: document.getElementById('secs'),
    startBtn: document.getElementById('startBtn'),
    stopBtn: document.getElementById('stopBtn'),
};

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.intervalIsActive = false;
        this.targetDate = targetDate;
        this.selector = selector;
        // this.start();
    }

    start() {

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const timeDiff = this.targetDate - currentTime;
            const time = timeComponents(timeDiff);

            updateTimer(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalIsActive = false;
    }

};

function updateTimer({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
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
};


const timerPlugin = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 17, 2021'),
});

refs.stopBtn.addEventListener('click', () => {
    timerPlugin.stop();
});

refs.startBtn.addEventListener('click', () => {
    timerPlugin.start();
});


// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Nov 17, 2021'),
// });


// class CountdownTimer {
//     constructor({ onTick, targetDate }) {
//         this.intervalId = null;
//         this.intervalIsActive = false;
//         this.onTick = onTick;
//         this.targetDate = targetDate;
//     }

//     start() {
//         if (this.intervalIsActive) {
//             return;
//         }
//         this.intervalIsActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const timeDiff = this.targetDate - currentTime;
//             const time = timeComponents(timeDiff);

//             this.onTick(time);


//         }, 1000);
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         this.intervalIsActive = false;
//     }
// };

// const timerPlugin = new CountdownTimer({
//     onTick: updateTimer,
// });


// function updateTimer({ days, hours, mins, secs }) {
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
// };


// function timeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
// };
