// setInterval(() => {
//     console.log('Hello world');
//     }, 1000);


const countvalue = document.querySelector('#counter');

const  incriment =( ) => {
    if(countvalue !=null){
    let value = parseInt(countvalue.innerText);
    value = value + 1;
    countvalue.innerText = value;
    }

};


const decrement = ( ) => {

    if(countvalue!=null){
    let value = parseInt(countvalue.innerText);
    value = value -1;
    countvalue.innerText = value;
    }

};
