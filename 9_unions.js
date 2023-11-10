// sometimes function may require mupltiple type values and may return multiple
// type values
// so union is very good way to define two or more type keeping the type strict
// lets say sometime socre may be number and sometime it is string
// so we can deal it with as
var score;
score = 1;
score = "33";
var mahesh = {
    name: "mahesh",
    id: 3,
};
mahesh = {
    username: "mahesh",
    id: 4,
};
// in case of functions
// function getDBId(id:number|string)
// {
//     // complex functions
//     console.log(`id is ${id}`)
// }
// typescript will give you error as it do not know as id is 100% string
// function getDBId(id:number|string)
// {
//     id.toUpperCase();
// }
// so if you do like this now it knows that it is 100% string and error will be gone
// function getDBId(id: number | string) {
//   if (typeof id === "string") {
//     id.toUpperCase();
//   }
// }
// array
var data1 = ["1", "2"];
var data2 = [1, 2];
// const data3:string[] | number[] = [];
// this is actually says that it may contain only string or only numbers which
// is not correct
// so correct way to do it is
var data3 = ["1", 2, 4, "t"];
// typescript is all about making types strict
// let pi:3.14;
// pi = 3.145 now this is error becuase now the value of pi can only be
// 3.14 this is not useful case rather below is more useful case
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "window";
// but this will give you error
// seatAllotment = "crew"
