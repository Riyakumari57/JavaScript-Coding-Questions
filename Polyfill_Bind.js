// A polyfill is a piece of code (usually JavaScript on the Web)
//  used to provide modern functionality on older browsers that do not natively support it.

// Bind method
let obj = {
    firstName : 'Riya',
    secondName : 'Kumari'
}

function printName (nature , gender, city)
{
    console.log(`${this.firstName}__${this.secondName} is a ${nature} ${gender} from ${city}`);
}


Function.prototype.myBind = function(obj, ...args) {
    let func = this;
    return function(...args2)
    {
       func.apply(obj, [...args , ...args2]);
    }
}

const newFunc = printName.myBind(obj,'sweet' , 'girl');
newFunc('patna');




