function isLegaL(age: number): boolean {
    if(age >=18){
        return true;

    }else{
        return false;
}
}
let x=isLegaL(15);
console.log(x);

function inital()
{

}

function runAfter1s(fn:() => void){
    setTimeout(fn,1000);
}

runAfter1s(function(){
    console.log("Hi there!");
})