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




function print(s , callback)
{
    s+='kumari';
    
    callback();
    console.log(s);
}


function output()
{
    console.log('i am a callbck function');
}
print('riya',output)
