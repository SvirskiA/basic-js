module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let deep = 0;
        function howDeep(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].length >= 0 && typeof (arr[0] != 'string')) {
                    deep++;
                    howDeep(arr[i])
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= 0 && typeof (arr[0] != 'string')) {
                deep++;
                howDeep(arr[i])
            }
        }
        return ++deep;
    }
};