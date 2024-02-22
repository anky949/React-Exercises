



export const PrintArray1=()=>{
    const arr = [1,2,3,4,5];
    arr.forEach(num =>     setTimeout(() => console.log(num), num*3000));
    return (<div>hello</div>);
}