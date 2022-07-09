// Timer

// format: '1:05'
// string.padStart(2, '0')

// algo
// 1. getTime: console.log(`${minsPassed}:${secondsPassed}.padStart(2, '0')`);
// 2. startTimer
// 2.1. every 1s console.log(getTime)
// 2.2. if (secondsPassed === 60) ==> minsPassed++ and secondsPassed = 0;
// 2.3 use setInterval
// 3. stopTimer
// 3.1. use clearInterval(timerId)
// 4. resetTimer

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: undefined,

  getTime() {
    return `${this.minsPassed}:${String(this.secondsPassed).padStart(2, '0')}`;
  },

  startTimer() {
    this.timerId = setInterval(
      function () {
        this.secondsPassed++;
        if (this.secondsPassed === 60) {
          this.minsPassed++;
          this.secondsPassed = 0;
        }
        console.log(this.getTime());
      }.bind(this),
      1000,
    );
  },

  stopTimer() {
    clearInterval(this.timerId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

timer.startTimer();
// timer.stopTimer();
// timer.resetTimer();

// export { timer }
