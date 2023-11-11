// interface is like type but there are differences
// interface is also feels like class like loosly like class

interface User {
  readonly _id: string;
  email: string;
  userId: number;
  googleId?: number;
  startTrial: () => string;
  startSubscription(): string;
  getCoupon(cuponid: string, cuponprize: number): number;
}
// notice _id is readonly and googleId is optional
// startTrail is a method which return string
// another syntax for methods is
// startSubscription():return type of method

const mahesh: User = {
  _id: "ydhhdhhdhd",
  email: "2mahesh@gmail",
  userId: 3,
  startTrial: () => {
    return "mahesh";
  },
  startSubscription: () => "sub",
  getCoupon: (id: "1233", prize: 45) => 10,
};

// difference between interface and type
// difference beteen them is on documentation you can read it form there

// we can reopen interface means we can add more properties to it
// interface User {
//     readonly _id: string;
//     email: string;
//     userId: number;
//     googleId?: number;
//     startTrial: () => string;
//     startSubscription(): string;
//     getCoupon(cuponid: string, cuponprize: number): number;
//   }

// now i can add gitId to User
// interface User  {
//     gitId : number
// }

// interface can be inherited
// interface User {
//     readonly _id: string;
//     email: string;
//     userId: number;
//     googleId?: number;
//     startTrial: () => string;
//     startSubscription(): string;
//     getCoupon(cuponid: string, cuponprize: number): number;
//   }

interface Admin extends User {
  role: "Admin" | "leader" | "devops";
}
// it will have all the properties of User
// you can inherit from multiple by adding just a comma
