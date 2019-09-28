/**
 *混淆数组函数
 *
 * @param {Array} arr
 * @returns
 */
function confusionArray (arr) {
    if (!arr instanceof Array) {
        console.log('arr must be array')
        return
    }
    return arr.slice().sort(() => Math.random() - 0.5)
}

// eg:
let arr1 = [1, 2, 4, 5]
let arr2 = confusionArray(arr1)
console.log(arr2)