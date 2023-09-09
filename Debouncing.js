// Debouncing is a programming pattern or a technique to 
// restrict the calling of a time-consuming function frequently,
//  by delaying the execution of the function until a specified 
//  time to avoid unnecessary CPU cycles, and API calls and improve performance.


let counter = 0;


const debounce = (fn , delay) =>{
    let timer ;
   return (...args) =>{
    clearTimeout(timer);
      timer =  setTimeout(() => {
        fn(...args);
       }, delay);
   }
}

function eventTrigger()
{
    console.log('Hey',counter++);
} 


const eventDebounce = debounce(eventTrigger , 3000);