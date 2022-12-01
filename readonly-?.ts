type Template = {
    name: string,
    readonly _id : number[],    
    creditCardDetails? : number     //makes this property optional
}


let myUser : Template = {
    name : 'yash',
    _id: [81813],
    // credit card is optional
}

myUser._id.push(347834);
console.log(myUser._id);



// myUser._id = 273682;
myUser.name = "garg";



//making type of card details
type cardNumber = { cardNumber : number}
type cardExpiryDate = { date : number}
type cvv = { cvv: number}

type cardDetails = cardNumber & cardExpiryDate & cvv;


