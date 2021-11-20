// class Rectangle {
    
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     get area(){
//         return this.calculateArea();
//     }
//     calculateArea () {
//         return this.height * this.width;
//     }
// }

// const rect1 = new Rectangle(10, 12);

// console.log(rect1.area);

    //Thi is the code using classes to compute the area of a triangle.
class Triangle {
        constructor(base, height){
            this.bottom = base;
            this.centerLine = height;
        }

        //this{} calls the formula of the are of a triangle into this.
        get Area(){
            return this.effectiveArea();
        }

        //this {} holds the formula for area of a triangle
        effectiveArea(){
            return this.bottom * this.centerLine * 0.5 ;
        }
    }

    //operation is declared outside of the class
    const triA = new Triangle(8,9)
    console.log(triA);
    console.log(triA.Area);