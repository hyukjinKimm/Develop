const path = require('path')

console.log(__dirname, 'var.js')
console.log(path.join(__dirname, '\\', 'var.js'))
console.log(path.resolve(__dirname,'var.js'))
console.log(path.resolve('/foo', 'bar', 'baz'));  
// '/foo/bar/baz' (절대 경로가 먼저 나와서 이것을 기준으로 합침)
console.log(path.resolve('/foo', '/bar', 'baz'));  
// '/bar/baz' (두 번째 인자가 절대 경로라 첫 번째는 무시됨)