/**
 * Author: Md.Ashrful Islam
 * Topic: How to Use forEach and understand when to use and why to use
 * Writen Date: 30-10-2023
 */

//1.How to write Foreach Loop [Bangla: Kibhave forEach loop likhte hoy]

/**
 * NOTE: 
 * The forEach method accepts two parameters: a callback and a value to use as the this context when executing the callback. 
 * The callback function can accept three parameters: the current element being processed, the index of that element in the array,
 *  and the array forEach was called upon. 
 */

//Simple Callback ForEach loop Execuion
/**
 * step-1: forEach loop doesnot have second bracket outside of first bracket. [Example:  arr.forEach(){ its not possible to use }]
 * step-2: forEach loop has a function in firstbracket. without function forEach loop didnot work. [Example:  arr.forEach(()=>{we declared a arrow function})]
 * step-3: Function means arrow function doesnot mean you use another function reference here by using there name.[Example: suppose we have fruit(){} function but we cant use this same function as arr.forEach(fruit(){}) like this.its not possible ]
 * forEach loop itself has a arrow function or any function by user required name.
 * step-4: suppose we use loop for an array . forEach loop first parameter pass the value of the array.[Example: arr.forEach((value)=>{}) ]
 * step-5: second parameter pass the index of the array.[Example: arr.forEach((value,index)=>{}) ]
 * step-6: Third Parameter Pass the array itself.[Example: arr.forEach((value,index,arr)=>{}) ]
 * NOTE: See in 6th step we has three parameters value will pass the each value of array,index will pass the value are sent now this value index.and the 
 * third parameter directly pass the full array for user use.
 */

const fruits = ['apple', 'Banana', 'Orange'];

//remember is we use only single parameter in arrow function there no need to use (item) bracket like this.But if we pass two or three param then 
//we have to use (item,index,arr) like this.
fruits.forEach(item => {
    console.log(item);
})

/* OUTPUT [Just print the array item means each array value.]
 apple
 Banana
 Orange
*/



/**
 * Callback function passing in the forEach loop.
 * Simply just creating an function used the name of the function in loop. remember we dont declare as before arrow function
 * Or as forEach loop own function.
 * We just passed the function name in the loop.
 */

function logElement(element) {
    console.log(element);
}

fruits.forEach(logElement);

/* OUTPUT:
apple
Banana
Orange
*/

/**
 * Now we are using two parameter in forEach loop
 * Now suppose we want to the serail of the fruits in array.So we just simply print the index along with the item.
 */


fruits.forEach((item,index)=>{
    console.log(`${index}: ${item}`);
})

/* OUTPUT:
0. apple
1. Banana
2. Orange
*/