//id can be either number or string
// we use type for this

type GreetArg = number | string | boolean;
function greet(id: GreetArg){

}

greet(1);
greet("1");