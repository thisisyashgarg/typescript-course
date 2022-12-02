//discriminated union
interface Circle{
    kind: 'circle',
    radius: number
}

interface Square{
    kind: 'square',
    side: number
}

interface Rectangle{
    kind: 'rectangle',
    length: number,
    breadth: number,
}

type Shape = Circle | Square;
function getArea(input : Shape) : number{
    if (input.kind === 'circle') {
        return Math.PI * input.radius **2;
    }
    return input.side ** 2;
}

function getAreaAgain(shape: Shape){
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2; 
        case 'square':
            return shape.side ** 2; 
        case 'rectangle':
            return shape.length * shape.breadth; 
        default:
            const _defaultShape :never = shape;
            return _defaultShape;
    }
}