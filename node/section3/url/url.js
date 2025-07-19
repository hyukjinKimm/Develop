const url = require('url')

const { URL } = url 
const myURL = new URL("https://www.inflearn.com/courses/lecture?courseId=330181&tab=curriculum&type=LECTURE&unitId=143559")

console.log('new URL(): ', myURL)
console.log('ur.format():', url.format(myURL))
// 호스트네임 = 호스트 - 포트