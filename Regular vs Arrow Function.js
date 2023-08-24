const user= {
  name: "Riya Kumari",
	email: "my@email.com",
  updateName: function(name){
    this.name = name;
  },
	updateEmail: email => {
		this.email = email
	}
}

user.updateName("Riyakumari57");
user.updateEmail("new@email.com")
console.log(user.name);
console.log(user.email);



// The 'updateName' method is defined using a regular function expression (function(name) {...}). 
//   Regular functions have their own 'this' context, and when invoked as a method of an object, 
//   'this' refers to the object that the method was called on. In this case, when 'updateName' is called,
//   'this.name' refers to the name property of the user object.



// The 'updateEmail' method is defined using an arrow function (email => {...}).
//   Arrow functions, unlike regular functions, do not have their own 'this' context.
//   Instead, they inherit the 'this' value from the enclosing lexical scope. 
//   In this case, the enclosing scope is the global scope (or the containing function scope, if applicable),
//   not the user object. Therefore, when 'updateEmail' is called, 'this.email' does not refer to the email property of the user object.
