let foo; // This should cause an ESLint error
let bar; // This should cause an ESLint error
const baz = 1; // This should cause an ESLint error
let badword1; // This should cause an ESLint error
const badword2 = 1; // This should cause an ESLint error
let allowedVariable; // This should not cause an ESLint error
function allowedFunction() { } // This should not cause an ESLint error
class AllowedClass { } // This should not cause an ESLint error
const badword = () => { } // This should cause an ESLint error