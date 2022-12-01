type User = {
    name: string,
    isPaid : boolean,
    isActive: boolean
}

function createUser (user: User): User{
    return user;
}

createUser ({name: "Yash", isPaid: true, isActive: true});