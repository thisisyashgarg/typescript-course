const scoreBoard : Array<number> = []
const names : Array<number> = []

function identityTwo (val : any): any {
   return val;
}

function identityThree <Type> ( val : Type) : Type{
    return val;
}  //once a data type is entered, it is locked

function identityFour <T> ( val : T) : T{
    return val;
} // same as identityThree just use T to identify it

identityThree('yashGarg');



//EXAMPLE
interface Bottle{
    brand: string,
    serialNo : number
}
identityFour<Bottle>({brand: 'Cello', serialNo: 897987});



// IN ARROW FUNCTIONS and ARRAY 
function getSearchProducts <T> (products : T[]) : T {  //T means one value from arrya
    //some calculation
    return products[1];
}

const getMoreSearchProducts = <T>(val: T[]): T => {
    //some calculation
    return products[1];
}



