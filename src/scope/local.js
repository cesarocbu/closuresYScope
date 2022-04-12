const helloWorld = () => {
    const hello = 'Hello world!';
    console.log(hello);
}


helloWorld();


console.log(hello);



var scope = 'Im global';
const functionScope = () => {
    var scope = 'im a local function';
    var func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();