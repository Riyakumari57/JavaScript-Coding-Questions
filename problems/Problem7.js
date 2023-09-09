// Remove all null and undefined properties from object

let obj = {
    a: 1,
    b: null ,
    c: undefined,
    d: 'hello'
};

let result = Object.fromEntries(Object.entries(obj).filter(([_,val])=> val!=null))

console.log(result);

