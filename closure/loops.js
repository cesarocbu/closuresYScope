const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() =>{
            console.log(i);
        }, 100) 
    }
};

anotherFunction(); 