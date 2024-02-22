
const Test = function(name) {
    this.name = name;
    Test.instanceCount++;
};



  export const CountInvocationAndInstances=()=>{
      Test.instanceCount = 0;

      const foo = new Test('bar');
       const baz = new Test('qux');
      const test = new Test("test");

      return(<div>Number of invocation : {Test.instanceCount}</div>)
   }