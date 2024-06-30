export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = (typeof name === 'string') ? name : console.error('TypeError: Name must be a string');

    this._length = (typeof length === 'number') ? length : console.error('TypeError: Length must be a number');

    this._students = (typeof students === 'object') ? students : console.error('TypeError: Students must be a array');
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      console.error('TypeError: Name must be a string');
    }
  }

  /**
   * set length
  */
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      console.error('TypeError: Length must be a number');
    }
  }

  set students(students) {
    if (typeof students === 'object') {
      this._students = students;
    } else {
      console.error('TypeError: Students must be a array');
    }
  }
}
