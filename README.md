# JavaScript

This repository contains a collection of daily JavaScript coding questions or concepts along with their solutions.

<h3>JavaScript Concepts</h3>
<ul>
  <li>Callback Function</li><p>A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.</p>

  
```javascript

    function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });

  ```
</ul>
