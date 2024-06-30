export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    const warningExist = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this), 'evacuationWarningMessage');
    if (!warningExist) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    return this._sqft;
  }
}
