// eslint-disable-next-line no-unused-vars
class ClearCase {
    constructor(column) {
        this.column = column;
        this.init();
    }

    init() {
        this.strip = 1;
        this.replace = [];  // [('cza', '陈子昂')]
        this.reflect_from = [];  // [key1|key2,key3|]
    }

    toJSON() {
    }
}

export default ClearCase;