// Object with length property is and array like object
const arrobj = {0: 'America', 1: 'Europe', length: 2}

// converting array like object into array
const arr = Array.prototype.slice.call(arrobj)

console.log(arr)
