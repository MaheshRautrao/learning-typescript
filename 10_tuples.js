// tuples are not in javascript but we can have them in typescript
// it like special type of array with some restrictions on it
// lets say sometime order of data is also imporatant along with the type
// then we can use tuples
var user;
user = ["mahesh", 1, true];
// user = [1,"mahesh",true] this will give us error as order is not maintained
// usecase in rgb color
var rgb;
var user1 = ["mahehs", 45];
// you can change the value it is not restricted may be it change in new versions
user1[0] = "newname";
// it is weird that although there is type and order defined in tuple
// you are able to use push in user1
// user1.push("mahesh");
