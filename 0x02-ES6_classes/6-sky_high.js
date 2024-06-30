import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, number) {
    super(sqft);
    this._floors = number;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
