class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.high = max;
        this.low = min;
    }

    guess() {
        return Math.round((this.low + this.high) / 2);
    }

    lower() {
        this.high = this.guess();
    }

    greater() {
        this.low = this.guess();
    }
}

module.exports = GuessingGame;
