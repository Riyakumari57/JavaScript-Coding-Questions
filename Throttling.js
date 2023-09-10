// Throttling is a technique often used in JavaScript to 
// limit the rate at which a function can be called.
//  This can be useful in a variety of situations, 
//  such as when dealing with events that may be triggered 
//  many times in a short period of time, or when making
//   requests to a server that should not be sent too frequently.
let counter = 0;
const getData = ()=>{
    console.count("Fetching Data...");
}


const throttle = (fn , limit) =>{
    let flag = true;

    return (...args) => {
        if(flag)
        {
            fn(...args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            },limit);
        }
    }

}

const betterFunction = throttle(getData,1000);

window.addEventListener("resize",betterFunction);


  