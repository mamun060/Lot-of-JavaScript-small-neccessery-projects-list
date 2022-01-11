class Lifo{
    constructor(){
        this.LifoItem = [];
    } 

    add(item){
        this.LifoItem.push(item)
    } 

    remove(){
        if(this.LifoItem.length){
            return this.LifoItem.pop();
        }
    }
}


const obj = new Lifo();

obj.add("A");
obj.add("B");
obj.add("C");
obj.add("D");
obj.add("E");
obj.add("F");
obj.add("G");
obj.add("H");


console.log(obj.LifoItem);

const update = obj.remove();

console.log(update);

console.log(obj.LifoItem);