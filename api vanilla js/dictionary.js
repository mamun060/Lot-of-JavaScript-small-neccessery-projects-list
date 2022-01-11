class dictionary{
    constructor(){
        this.dictionary = {}
    }

    add(key, value){
        this.dictionary[key] = value;
    }

    get(key){
        return this.dictionary[key];
    }
}

const phonebook = new dictionary();

phonebook.add('Raju','01953103206');
phonebook.add('Samantha','01953103207');
phonebook.add('Laily','01953103208');
phonebook.add('Sonia','01953103209');
phonebook.add('Supti','01953103210');
phonebook.add('Rana','01953103211');

console.log(phonebook.dictionary);

const name = phonebook.get("Raju");

console.log(name);
