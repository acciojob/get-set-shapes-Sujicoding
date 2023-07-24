//complete this code
class Rectangle {
	constructor(width, height) {
    this._width = width;
    this._height = height;
}
	 get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Animal {
	constructor(sideLength) {
    // Call the parent class constructor with the sideLength argument for both width and height
    super(sideLength, sideLength);
  }

  getPerimeter() {
    return 4 * this.width; // In a square, all sides are equal, so we can use width or height
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
