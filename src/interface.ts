interface Person{
    name: string;
    age: number;
    greet(phrase: string):void;
}

class Employees implements Person{
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }
    greet(phase:string){
        console.log(`${phase} ${this.name}`);
    }
}

const e = new Employees("Manash",22);
console.log(e.name);