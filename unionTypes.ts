let score : number | string ;
score = 22;
score = "twenty two";




type NormalUser = {
    name : string,
    id : number
}

type Admin = {
    username : string,
    id : number
}


let yash : NormalUser | Admin = { 
      name : "yash",
      
}
