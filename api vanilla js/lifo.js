// Stack practice with LIFO

class Stacks{
    constructor(){
        this.Stack = [];
    }

    add(item){
        this.Stack.push(item) 
    } 

    remove(){
        if(this.Stack.length){
            return this.Stack.pop()
        }
    }
}

const value = new Stacks()

value.add("Raju");
value.add("Popi");
value.add("Munni");
value.add("Mamun");

console.log(value.Stack)

const backed = value.remove()

console.log(backed)
console.log(value.Stack)

// Stack practice with LIFO

const lifos = [];
lifos.push("Raju","Mazed","Laily","Samantha");

console.log(lifos);

const lastUpdate = lifos.pop()

console.log(lastUpdate)
console.log(lifos)