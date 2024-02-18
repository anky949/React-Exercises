
import React from "react";

export class PrintArray extends React.Component{

    render() {
        const arr=[1,2,3,4,5];
       arr.forEach(num => console.log(num));
        return (<div></div>)
    }
}