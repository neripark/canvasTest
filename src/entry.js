class testClass {

    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
    
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

const test = new testClass('tiny cat');
test.printName();

const heading = document.getElementById('heading');
heading.addEventListener('click', () => {
    console.log(test.name);
}, false);