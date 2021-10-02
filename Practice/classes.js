class Rectangle {
    
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.calculateArea();
    }
    calculateArea () {
        return this.height * this.width;
    }
}

const rect1 = new Rectangle(10, 12);

console.log(rect1.area);