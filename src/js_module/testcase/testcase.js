// eslint-disable-next-line no-unused-vars
class TestCase {
    constructor(key) {
        this.key = key;
        this.init();
    }

    init() {
        this.checkNone = true;
        this.checkRepeat = true;
    }

    toggleNone() {
        this.checkNone = !this.checkNone;
    }

    toggleRepeat() {
        this.checkRepeat = !this.checkRepeat;
    }

    toJSON() {
        return {
            key: this.key,
            checkNone: this.checkNone,
            checkRepeat: this.checkRepeat
        }
    }
}

export default TestCase;