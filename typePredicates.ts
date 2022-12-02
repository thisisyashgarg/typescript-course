type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish (pet: Bird | Fish) : pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet
        return 'fish food';
    } else{
        pet
        return 'bird food'
    }
}