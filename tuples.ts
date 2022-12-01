let tuple : [number, boolean, string] = [23, true, 'agr'];
let rgb: [number, number, number] = [234,34,424];

//using with types
type MyUser = [string, number, string];
const newUser: MyUser = ['yash', 21, 'yash@garg.com']

newUser.push(78); // this is possible which is not good