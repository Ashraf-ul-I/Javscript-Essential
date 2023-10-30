/**
 * @description THis total area is 
 * @global scope
 */

/**
 * IN JS there are 3 scope exist
 * Block Scope --example--> if() { }
 * Fucntion Scope --example--> function(){ }
 * Global Scope [Notes: Its basically write anything outside of those 2 scope name as block scope and function scope] 
 */

if(true){
    /**
     * @description this is called block scope.Anything written in { } this braces is called 
     * BLOCK SCOPE
     * Whatever we declare in Block scope Using let and Const will not accesable by the other
     * scope like function or in global also.
     * @abstract exception comes in var, look here we define var type variable
     * and run this on the sum function and call the 
     * sum() function in global scope, still it can access the c variable in function scope
     * which create a issue because if we declare c=40 in function sum()
     * this sum() will print then c=40 here let variable comes to sovle the issue.
     * if we use the let c=30 then called its in function it gives us a error .
     * NOTE[ Just changes the type by running this code you can understand what actually i
     * describe here in the text ]
     */

    var c=30;
    // let c=40;
    // const c=30
}

function sum(){
    console.log(c);
}
sum();

/**
 * @summary dont create a confusion by { } braces here in function .
 * if has { } also function has {} 
 * but function is called function scope
 * whereas if {} is called Blocked scope even for(){} is also a blocked scope .
 * Both are different they has their different roles. 
 */