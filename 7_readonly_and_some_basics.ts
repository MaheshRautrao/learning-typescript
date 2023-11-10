type User = {
  readonly _id: string;
  name: string;
  age: number;
  isActive: boolean;
  creditCardDetails?: number;
  readonly friends: string[];
};

// ? is used for optional parameters that may or may not get value
// readonly do not allow to change its value
// in case of array we can push to array although it is readonly

let u: User = {
  _id: "1",
  name: "maees",
  age: 20,
  isActive: true,
  friends: ["ram", "shyam"],
};

// u._id = "34" ; error because it is read only
// u.friends.push("leela"); we are able to push to array although it is readonly
// creditCardDetails are optional as we have used ?

// ***** mix and match types ****

type cardDate = {
  cardDate: string;
};

type cardNum = {
  cardNumebr: number;
};

type cardDetails = cardNum &
  cardDate & {
    cvv: number;
  };

//   & {cvv:number} is not a good practice  as it is directly written
// but cardNum & cardDate is a good practice

export {};
