export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Factory = this.constructor[Symbol.species];
    const clone = new Factory();
    return clone;
  }

  static get [Symbol.species]() {
    return this;
  }
}
