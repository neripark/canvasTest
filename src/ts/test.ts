class testClass {
    public _name: string;

    constructor(name: string){
        this.name = name;
        this._name = name;
    }

    printName(){
        console.log(`名前は${this.name}`);
    }
    
    set name(name){
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
}

export const testMethod = () => {
    const test = new testClass('tiny cat');
    test.printName();

    const heading = document.getElementById('heading')!;
    heading.addEventListener('click', () => {
        console.log(test.name);
    }, false);

    test.name = "aaaa";
    test.printName();
    console.log('[info: test script is done.]');
}
