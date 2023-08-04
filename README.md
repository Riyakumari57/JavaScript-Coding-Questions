# JavaScript
This repository contains a collection of daily JavaScript coding questions or concepts along with their solutions.

<h3>JavaScript Concepts</h3>
<ul>
  <li>Callback Function</li><p>A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.</p>

  
```javascript

    function modifyArray(arr, callback) {
    arr.push(100);
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });

  ```


<li>Slice</li><p>The slice() method returns a <b>shallow copy</b>(<span style="color:orange;">A shallow copy of an arrays or object is one where they both have the same reference in memory. That means that if you change the shallow copy, it may or may not change the original copy.</span>) of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.</p>
</ul>
