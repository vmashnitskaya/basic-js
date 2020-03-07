module.exports = class DepthCalculator {

    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            if (arr.length === 0) return 1;
            return 1 + Math.max(...arr.map(element => this.calculateDepth(element)));
        } else {
            return 0;
        }
    }
}


