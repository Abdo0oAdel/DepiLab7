class Shape {
    calculateArea() {
        throw new Error('Must implement calculateArea');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    static compareAreas(rect1, rect2) {
        return rect1.calculateArea() - rect2.calculateArea();
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    static compareAreas(circle1, circle2) {
        return circle1.calculateArea() - circle2.calculateArea();
    }
}

const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(3, 7);
console.log('Rectangle 1 area:', rect1.calculateArea());
console.log('Rectangle 2 area:', rect2.calculateArea());
console.log('Compare rectangles:', Rectangle.compareAreas(rect1, rect2));

const circle1 = new Circle(4);
const circle2 = new Circle(2);
console.log('Circle 1 area:', circle1.calculateArea());
console.log('Circle 2 area:', circle2.calculateArea());
console.log('Compare circles:', Circle.compareAreas(circle1, circle2));
