// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);

// Note: A ReferenceError occurs when code attempts to use a variable that has not been declared or is outside of its scope, preventing proper access or execution.
// console.log(blockLet); // Reference Error
// console.log(blockConst); // Reference Error

// Demonstration of Scope of Variables for function scope
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

// Practice Task
{
    let tempLet = "block scoped let"
    var tempVar = "block scoped var"
    const tempConst = "block scoped const"
    
    // Reassign variables
    tempLet = "Reassigned tempLet - inside block"
    tempVar = "Reassigned tempVar - inside block"
    // tempConst = "Reassigned tempConst - inside block" //TypeError: Assignment to constant variable.

    console.log(tempLet)
    console.log(tempVar)
    console.log(tempConst)
}

// -------------------------------------------------
 // Reassign variables outside block - All of the following works
//  tempLet = "Reassigned tempLet - outside block"
//  tempVar = "Reassigned tempVar - outside block"
//  tempConst = "Reassigned tempConst - inside block"

//  console.log(tempLet)
//  console.log(tempVar)
//  console.log(tempConst)
// -------------------------------------------------

//  console.log(tempLet) // Uncaught ReferenceError: tempConst is not defined
 console.log(tempVar)
//  console.log(tempConst) // Uncaught ReferenceError: tempConst is not defined
