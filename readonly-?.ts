type Template = {
    name: string,
    readonly _id : number,    
    creditCardDetails? : number     //makes this property optional
}

let myUser : Template = {
    name : 'yash',
    _id: 81813,
    // credit card is optional
}

myUser._id = 273682;
myUser.name = "garg";