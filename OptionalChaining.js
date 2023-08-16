const user = {
    name :"Riya Kumari" ,
    age: 20 ,
    address:{
        street:" Road ",
        city : "Patna" ,
        state : "Bihar",
        zip : 4657890   
    }   
}
console.log(user.address.country?.pin); //undefined

//Optional chaining can be used to acess the elements of the array in JavaScript . It works in a similar way to acessing properties
// of an object but using ?.[] instead of the ?. operator

const users = [
    {name : "Riya" , age: 20 },
    {
        name : "bebe" , age : 25},
    {
        name : "jenny", age : 30} ,
    ];

console.log(users[3]?.age);




