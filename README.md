# console-color
Console.log in different colors for easier distinction between multiple or many console logs

Homepage: https://github.com/Gurjinder7/console-color#readme  :wave:

### Features:
* Console log in style and provide distinction in multiple logs
* Color all the arguments or use a single line colored heading for logging
* Log as many arguments in a single log function
* Use default yellow color or bring in other colors to the party :smirk: 
* Jsdoc documentation for all the info you need

### Colors:
    1. Y - Yellow (default)
    2. O - Orange
    3. R - Red
    4. G - Green
    5. C - Cyan
    6. B - Blue
    7. V - Violet
    8. P - Pink

### How to install
```npm i @gurjinder7/console-color```

### How to use in your React project

1. Import the functions `log` and `headlog` into the project
2. Use them to console where ever you want
3. `log` function
   1. expected syntax : `log(color, arguments_to_log)`
   2. default syntax : `log(arguments_to_log)` 
4. `headlog` function
   1. expected syntax : `headlog(heading, color, arguments_to_log)`
   2. default syntax: `headlog(heading, arguments_to_log)`
   3. `heading` is required!

### Examples:

1. `log("O", a, b, c, d)`
   1. ![alt text](<images/img2.png>)
2. `log(a,b,c)`
   1. ![alt text](<images/img3.png>)
3. `headlog("My heading", "V", a, b, c)`
   1. ![alt text](<images/img1.png>)
4. `headlog("My heading", a, b, c)`
   1. ![alt text](<images/img4.png>)



#### Report an issues! :cry:
* Please raise an issue on the package repo at: https://github.com/Gurjinder7/console-color/issues