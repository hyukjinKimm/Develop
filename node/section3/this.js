console.log(this);
console.log(this === module.exports)
function a() {
    console.log(this === global);
}
a();
require('./var')
console.log(require.cache)
require('./var')
