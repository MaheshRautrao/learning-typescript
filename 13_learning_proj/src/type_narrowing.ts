// type narrowing means providing extra safety over types
// javascript behaves tricky
// if you get type of null it shows object
// if you get type of [1,2,3] it shows object
// if you have empty string it is string which is ok as type but we should cover
// it as our buisness case
// means we should check for null or array or other
// so include it in type declaration so typescript will have more strict type check
// you can also check for empty string

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// in operator narrowing

interface user {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function checkAdmin(account: user | Admin) {
  if ("isAdmin" in account) return account.isAdmin;
}

// using instance of
// this is used to check if the variable if a instance of something

// function logValue(x: Date | string) {
//   if (x instanceof Date) {
//     console.log(x.toUTCString());
//   } else {
//     console.log(x.toUpperCase());
//   }
// }

// using type predicates
// read from documentation somewhat advance to understand
// read all the narrowing from documentation actually to get better idea
