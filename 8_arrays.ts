// const superHeros = [];
// superHeros.push("spider-man")
// this is not correct way to define array as it consider it as never type

// const superHeors :[]= []
// superHeors.push("spider-man")
// this is also not the correct way to define array as it consider it
// empty array always

// correct way to define array is
const superHeors: string[] = [];
superHeors.push("spider-man");

// another way to do this is
const superPowers: Array<number> = [];

// using with custom type
type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
const allUserss: Array<User> = [];

// allUsers.push({name:2,isActive:true})
// this will give me arror as it is not follwing type defined above

// you can have array of array
const mlModel: number[][] = [];
