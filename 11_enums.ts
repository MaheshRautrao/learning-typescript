// consider a scenario when you want to restrict a user for choices
// the one way is you can do like
// const seat =1;
// and then if(seat==1) typeofseat = "aisle"
// else if(seat==2) typeofseat = "middle" like this
// better way to do this is
// enum seattypes {
//   aisle,
//   middle,
//   window,
//   crew,
// }
// now this is a more reliable way to do so
// like const seat = seattypes.aisle
// it will show only 4 options

// another thing is when you hover you will see the first one
// gets default value of 0 then next 1 then so on
// you can change this
// enum seattypes {
//     aisle = 21,
//     middle,
//     window,
//     crew,
//   }
// now the next value will start from 22

// enum seattypes {
//     aisle ,
//     middle=43,
//     window,
//     crew,
//   }
// here aisle has 0 then window has 43

// you can any value like string also
// enum seattypes {
//     aisle = "aisle",
//     middle,
//     window,
//     crew,
//   }
//   this gives error says enum must have initilizer so you have to
// give value to each one

// enum seattypes {
//     aisle = "aisle",
//     middle=1,
//     window,
//     crew,
//   }
//   you can do this also

// notice the generated javascript code for enum
// enum seattypes {
//     aisle = "aisle",
//     middle=1,
//     window,
//     crew,
//   }
// -->
// var seattypes;
// (function (seattypes) {
//     seattypes["aisle"] = "aisle";
//     seattypes[seattypes["middle"] = 1] = "middle";
//     seattypes[seattypes["window"] = 2] = "window";
//     seattypes[seattypes["crew"] = 3] = "crew";
// })(seattypes || (seattypes = {}));

// and when you use const enum
// const enum seattypes {
//     aisle = 2,
//     middle=1,
//     window,
//     crew,
//   }
// no code is generated
