let greetings: string = "hello mahesh";

greetings.toLowerCase();

// number
let usrId: number = 3500;
// it is not good pratice to always use :type because typescript
// if intelligent enough
// there are places where we have to use them but here it is obvious
// so try to avoid it
let userId = 3500;
userId.toFixed();

// boolean
let isLoggedIn = true;

console.log(greetings);

// any
// what is any
// when you dont want to type check any is used
// and in case where there is not guarntee that which type will be returned
// typescript infers it as any
// look at below example here typescript infers hero as any
// because the function may return any value
let hero;
function getHero() {
  return "thor";
}
hero = getHero();

// so here it is better to give type
// like let hero:string which will set its type and typecheck fot it

export {};
