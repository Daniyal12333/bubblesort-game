/*
var array = [];
for (i=0; i<10; i++){
    array[i] = parseInt(prompt("Enter " + i + " number"));
}
for (j=10; i>=0; i--){
    console.log(array[i]);    
}
*/


var array = []; //assigning arrays
var t;
for (i=0; i<10; i++){
    array[i] = parseInt(prompt("Enter " + i + " number"));
}
for (j=10; j>=0; j--){                  //j starts from 10 and decreases until it becomes 0
    for (var i = 1; i <= j; i++) {      //i starts from 1 and increases until it becomes equal to j
        if (array[i-1] > array[i]) {    //checks arrays any two values if current value is lesser than previous value then enters in 
            t = array[i-1];             //value of array[i-1] save in t
            array[i-1] = array[i];      //swaping values
            array[i] = t                //swapped
        }
    }
}
for (var i = 10; i > 0; i--) {          //starts from 10 and decreses until it becomes 0
    console.log(array[i]); 
}