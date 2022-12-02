interface Customer {
    readonly dbID : number,
    name: string,
    emailID: string,
    googleID?: string,
    // startTrial: () => string,
    startTrial(): string , // method defined
    getCoupon(couponName: string): number
}

interface Customer{
    githubID : string
} // we can add data later on as well

//inheritance also works
interface normalUser extends Customer{
    role: 'admin' | 'ta' 
}

let  myCustomer: normalUser = {dbID: 23, name: 'yash', emailID: 'y@y.com',
    startTrial() {
        return 'trial started'
    },
    getCoupon(name: 'yash10'){
        return 1201;
    },
    githubID: 'jksdhbhkc',
    role: 'admin'
}