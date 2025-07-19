const path = require('path');

console.log(path.join('foo', 'bar'));  
// 'foo/bar' (상대 경로 형태)

console.log(path.join('/foo', 'bar', 'baz'));  
// '/foo/bar/baz' (절대 경로처럼 보이지만, 단순 연결)

console.log(path.join('/foo', '/bar', 'baz'));  
// '/foo/bar/baz' (절대 경로 두 개 있어도 그냥 붙임)
