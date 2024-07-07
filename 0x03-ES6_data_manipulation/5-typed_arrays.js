export default function createInt8TypedArray(length, position, value) {
  let buffer;
  let int8view;

  if (length > 0) {
    buffer = new ArrayBuffer(length);
    int8view = new DataView(buffer, 0);
  }
  if (position >= 0 && position <= buffer.byteLength - 1) {
    int8view.setInt8(position, value);
    return int8view;
  }
  throw RangeError('Position outside range');
}
