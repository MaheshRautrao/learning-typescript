console.log("typescript from src");
// class User {
//   email: string;
//   name: string;
//   city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const mahesh = new User("mahesh", "maehsh20@gamil");
// mahesh.city = "jaipur";
// access keywords
// private --> you can use it only in the class
// by default everthing is public --> you can access anywhere
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city = "jaipur";
//   }
// }
// another way to write is private in constructor only
// class User {
//   private readonly city: string = "";
//   constructor(private email: string, private name: string) {
//     this.email = email;
//     this.name = name;
//     this.city = "jaipur";
//   }
// }
// getters and setters in ts
var User = /** @class */ (function () {
    function User() {
        this._courseCount = 0;
        //   protected means accessible in only the class and inherited class
        this.courseType = "codingff";
    }
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            //this is getter just use get keyword
            // in front
            return this._courseCount;
        },
        // set courseCount(count:number):number{
        //     if(count<1) throw new Error("course count should be 1+")
        // } this gives you error as in setter you should not have return type void is also not
        // allowed
        // correct way is
        set: function (count) {
            if (count < 1)
                throw new Error("course count should be 1+");
        },
        enumerable: false,
        configurable: true
    });
    //   methods can also be private means they are not accessible outside of class
    User.prototype.getToken = function () { };
    return User;
}());