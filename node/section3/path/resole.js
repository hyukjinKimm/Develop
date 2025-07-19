const path = require('path');

console.log(path.resolve('foo', 'bar'));  
// 현재 작업 디렉터리(process.cwd()) + '/foo/bar' 의 절대 경로 반환

console.log(path.resolve('/foo', 'bar', 'baz'));  
// '/foo/bar/baz' (절대 경로가 먼저 나와서 이것을 기준으로 합침)

console.log(path.resolve('/foo', '/bar', 'baz'));  
// '/bar/baz' (두 번째 인자가 절대 경로라 첫 번째는 무시됨)
