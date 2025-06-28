/*
==================================================================================
Javascript Execution Context
==================================================================================

#Execution Context
->Its is the environment where Js code is executed.
->Think of it as a box where your code runs.

#Types of Execution Contexts:
1.Global Execution Context(GEC)
2.Function Execution Context(FEC)
3.Eval Execution Context(rare, not used much)

------------------------------------------------------------------------

#Phases of Execution Context:
1. Creation Phase:
-Memory is Allocated.
-Variable are set to undefined.
-Function are hoisted.

2. Execution Phase:
-Code is Executed line by line.
-Variable are assigned actual values.

-------------------------------------------------------------------------
*/

const name = "John";

function sayHello(){
    let greeting = "Hello";
    console.log(greeting + " " + name);
}

sayHello();

/*
--------------------------------------------------------------------------
# Execution Flow
1. GEC created Memory:
-name: undefined
-sayHello: function

2. Global Code Runs:
-name = "John"
-sayName = function

3. sayHello() is called:
-> New Function Execution Context is created
-greeting = "Hello"
-console.log("Hello John")

--------------------------------------------------------------------------

key points:
-Js code runs inside "contexts".
-global context is created first.
-Each function call creates a new context.
-All contexts are managed using The call stack(LIFO).

===========================================================================
*/