// eslint-disable-next-line no-unused-vars
class TestCase {
    constructor(column) {
        this.column = column;
        this.init();
    }

    init() {
        this.checkNone = true;
        this.checkRepeat = true;
        this.checkDate = false;
        this.checkContain = '';
    }

    toggleNone() {
        this.checkNone = !this.checkNone;
    }

    toggleRepeat() {
        this.checkRepeat = !this.checkRepeat;
    }

    toggleDate() {
        this.checkDate = !this.checkDate;
    }

    addContain(contain) {
        this.checkContain = contain;
    }

    toJSON() {
        return {
            column: this.column,
            checkNone: this.checkNone,
            checkRepeat: this.checkRepeat,
            checkContain: this.checkContain
        }
    }
}

export default TestCase;