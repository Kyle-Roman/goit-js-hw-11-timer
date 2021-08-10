class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.intervalIsActive = false;
        this.targetDate = targetDate;
        this.selector = selector;
    }

    start() {

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const timeDiff = this.targetDate - currentTime;
            const time = this.timeComponents(timeDiff);

            this.updateTimer(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalIsActive = false;
    }

    timeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    updateTimer({ days, hours, mins, secs }) {
        const refs = this.getRefs();
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }

    getRefs() {
        return {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="mins"]`),
            secs: document.querySelector(`${this.selector} [data-value="secs"]`),
        };
    }
};


const timerPlugin = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 17, 2021'),
});

const timerPlugin2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Nov 17, 2022'),
});

const btns = {
    startBtn: document.getElementById('startBtn'),
    stopBtn: document.getElementById('stopBtn'),
};

btns.stopBtn.addEventListener('click', () => {
    timerPlugin.stop();
});

btns.startBtn.addEventListener('click', () => {
    timerPlugin.start();
});

const start2 = document.getElementById('startBtn2');
start2.addEventListener('click', () => {
    timerPlugin2.start();
})


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
