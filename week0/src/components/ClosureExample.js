import React from "react";

export const ClosureExample=()=>{
    const countAdd=(function (){
        let counter=0
        return function (){counter+=1; return counter;}
    })();

    let count=0;
    countAdd();
    countAdd();
    countAdd();
    count=countAdd();
    console.log(count);

    return(<div> total count : {count}</div>);

}