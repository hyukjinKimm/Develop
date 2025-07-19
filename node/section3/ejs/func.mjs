import { odd, even } from './var.mjs'
function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}
console.log('bye')
export default checkOddOrEven