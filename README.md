# JavaScript

This repository contains a collection of daily JavaScript coding questions or concepts along with their solutions.

<h3>JavaScript Concepts</h3>
<ul>
  <li>Callback Function</li><p>A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.</p>

  
```json

    {
     "step1":{
             "fields":[
                 {
                     "key":"name",
                     "type":"edit_text",
                     "hint":"Enter Your Name"
                 },
                 {
                     "key":"email",
                     "type":"edit_text",
                     "hint":"Enter email address"
                 },
                 {
                     "key":"labelBackgroundImage",
                     "type":"label",
                     "text":"Choose Background Image"
                 },
                 {
                     "key":"chooseImage",
                     "type":"choose_image",
                     "uploadButtonText":"Choose"
                 },
                 {
                     "key":"getAddressFromLatlng",
                     "type":"gps",
                     "options":[
                        {
                          "val":"2.334,3.444"
                        }
                     ]
                 },
                 {
                     "key":"showDropDown",
                     "type":"spinner",
                     "options":[
                        {
                         "default":true,
                         "displayText":"Delhi"
                        },
                         {
                         "default":false,
                         "displayText":"Mumbai"
                        }
                     ]
                 }
             ],
             "title":"Step 1",
             "next":"step2"
         }
    }
  ```
</ul>
