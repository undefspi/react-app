export function testingMaps(){



  console.log("testing maps")

  var incrementByOne = function (element){
    return element + 1;
  }

  var myArray = ["A","B","C","D"];

//  console.log("arrayMap = ",myArray.map(incrementByOne));
  myArray.map((val,key) => new newFunction(val,key))
  //Map passes each array element into the function being passed to it.
}


function newFunction(arg1,arg2){
  this.nArg1 = arg1;
  this.nArg2 = arg2;
  console.log("nArg1 = ",this.nArg1);
  console.log("nArg2 = ",this.nArg2);
}
